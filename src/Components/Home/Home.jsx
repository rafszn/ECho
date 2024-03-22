import './home.css'
import {Link} from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <div className="home">
        <div className="imageWrapper">
          <img src="speech.svg" alt="" />
        </div>

        <div className='textwrapper' >
          <h1><span className='speech'>Speech</span><span className='ify'>ify</span></h1>

        
          <p>
            Convert speech to text easily using a Speech Recognition System
          </p>

          <div className="buttonWrapper">
              <button>
                <Link to='speech-to-text'>
                  Get Started
                </Link>
              </button>
            
          </div>
        </div>

      </div>
    </div>
  )
}
export default Home