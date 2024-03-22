import {motion } from 'framer-motion'
import {
  ArrowLeftRounded, 
  SettingsRounded, 
  SettingsVoiceRounded, 
  ContentCopyRounded, 
  HomeRounded, 
  RotateLeftRounded, 
  PublishRounded
  } from '@mui/icons-material'
import { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import { activeVoice } from '../../Utils/utils'
import './speech.css'

const Speech = () => {
  const [text, setText] = useState()
  const [isRecording, setIsRecording] = useState(false)
  const [language, setLanguage] = useState('English')
  const [translatedText, setTranslatedText] = useState('')
  const [voices, setVoices] = useState([])

  // console.log(voices)

  const Languages=[
    'English',
    'French',
    'Spanish',
    'German',
    'Portuguese',
    'Korean',
    'Japanese',
    'Chinese'
  ]

  const activeV = activeVoice(language, voices)
  
  useEffect(()=>{
    const voices = window.speechSynthesis.getVoices()

    if (Array.isArray(voices) && voices.length > 0){
      setVoices(voices)
      return
    }

    if ('onvoiceschanged' in window.speechSynthesis ) {
      window.speechSynthesis.onvoiceschanged = function () {
        const voices = window.speechSynthesis.getVoices()
        setVoices(voices)
      }
    }

  }, [])

  function record (){
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
    const recognition = new SpeechRecognition()
    
    recognition.onresult = async function (event){

      const transcript = event.results[0][0].transcript
      setText(transcript)
      // console.log(transcript)

      const {data} = await axios.post('http://localhost:5000/speech/api', {
        transcript,
        language
      })
      setTranslatedText(data.text)
      // console.log(data.text)

      if(!activeV) return

      let utterance = new window.SpeechSynthesisUtterance(data.text)

      const voices =  window.speechSynthesis.getVoices()

      utterance.voice = activeV

      window.speechSynthesis.speak(utterance)

    }

    recognition.onaudiostart = function (){
      setIsRecording(true)
    }

    recognition.onaudioend = function (){
      setIsRecording(false)
    }
    recognition.start()

  }

  const style = isRecording ? {color : 'rgb(204, 17, 17)'} : {color: 'inherit'}


  return (
    <motion.div className='speech'
    initial={{x:1000, opacity:0}}
    animate={{x:0, opacity:1}}
    >

      <header>
        <ArrowLeftRounded/>
        <h1><span className='speech'>Speech</span><span className='ify'>ify</span></h1>
        <SettingsRounded/>
      </header>

      <div className="speechWrapper">
        <motion.span
          whileTap={{scale:0.95}}
          onClick={record}
        >
          <div style={style}>
            <SettingsVoiceRounded/>
          </div>
        </motion.span>
        {isRecording ? <p>Recording...</p> : <p>Tap to Speak</p>}
      </div>

      {text && (
        <motion.div 
        initial={{opacity:0}}
        animate={{opacity:1}}
        >
          <h3 className='h3'> Text Output</h3>

          <div className="textWrapper">
            <p> <span>Speech to text:</span> {text} </p>
              { translatedText && (
                <motion.p
                initial={{opacity:0}}
                animate={{opacity:1}}
                > 
                  <span>Translated text in {language}:</span> {translatedText} 
                </motion.p>)
              }

            <motion.button
              whileTap={{scale:0.99, backgroundColor:'rgb(153, 80, 187)'}}
              >
                <ContentCopyRounded/>
                Copy text
            </motion.button>
          </div>
        </motion.div>)
      }

      <h3 className='mb'>Select a Language</h3>
      <p className='default'>the default language is <i>English</i> </p>

      <div className="languageWrapper">
        <select value={language} onChange={(e)=>setLanguage(e.target.value)}>
          <option >please choose on option</option>
          {Languages.map((lang, id)=>{
            return (
              <option key={id}>
                {lang}
              </option>
            )
          })}
        </select>
      </div>

      <footer>
        <div className="iconWrapper">
          <HomeRounded/>
          <RotateLeftRounded/>
          <abbr title="Upload Audio file">
            <Link to='/transcribe'>
              <PublishRounded/>
            </Link>
            
          </abbr>
        </div>
      </footer>
      
    </motion.div>
  )
}
export default Speech