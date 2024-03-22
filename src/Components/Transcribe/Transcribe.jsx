import './transcribe.css'
import axios from 'axios'
import { useState } from 'react';
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


const Transcribe = () => {

   const [audioFile, setAudioFile] = useState(null);
   const [progress, setProgress] = useState({started: false, pc: 0});
   const [msg, setMsg] = useState(null);
   const [transcribedText, setTranscribedText] = useState('');

  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    setAudioFile(file);
  };

  const handleUpload = async () => {
    if (audioFile) {
      const formData = new FormData();
      formData.append('audioFile', audioFile);

      try {
        setMsg('Uploading...')
        setProgress(prev => {
         return {...prev, started:true}
        })
        const response = await axios.post('http://localhost:5000/transcribe', formData, {
          onUploadProgress: (progressEvent)=>{ setProgress(prev => {
            return {...prev, pc: progressEvent.progress*100 }
          })},
          headers: {
            "Custom-Header": "value"
          }
        } );

        setMsg('success!')
        setTranscribedText(response.data);

      } catch (error) {
        setMsg('Error uploading file');
      }
    } else {
      setMsg('No file selected');
    }
  };

  return (
    <motion.div className="transcribe"
    initial={{x:1000, opacity:0}}
    animate={{x:0, opacity:1}}>
      
      <header>
        <h1><span className='speech'>Speech</span><span className='ify'>ify</span></h1>
      </header>


      <h2>Convert Audio files to text almost instantly using a unique language model.</h2>

      <h3> Select an Audio file</h3>
      <p className='default'>Audio file size should not exceed <i>25mb</i> </p>
      <div className="flex">
        <input type="file" accept="audio/*" onChange={handleFileInputChange} />
        <motion.button onClick={handleUpload}
        whileTap={{scale:0.99}}
        whileHover={{backgroundColor:'rgb(153, 80, 187)'}}
        >Transcribe</motion.button>
      </div>

      {progress.started && <progress max='100' value={progress.pc}></progress>}
      {msg && <span> {msg}</span>}


      <div className='trans'>
        {transcribedText && (
          <motion.div 
          initial={{opacity:0}}
          animate={{opacity:1}}
          >
            <h3 className='h3'> Text Output</h3>

            <div className="textWrapper">
              <p> <span>Transcribed text:</span> {transcribedText} </p>
              
              <motion.button
                whileTap={{scale:0.99, backgroundColor:'rgb(153, 80, 187)'}}
                >
                  <ContentCopyRounded/>
                  Copy text
              </motion.button>
            </div>
          </motion.div>)
        }
      </div>


    </motion.div>
  )
}
export default Transcribe