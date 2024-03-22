import {Routes, Route} from 'react-router-dom'
import Home from './Components/Home/Home.jsx'
import Speech from './Components/Speech/Speech.jsx'
import Transcribe from './Components/Transcribe/Transcribe.jsx'




const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='speech-to-text' element={<Speech/>} />
        <Route path='transcribe' element={<Transcribe/>} />
      </Routes>
    </div>
  )
}
export default App