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
          <div className='img'>
            <img src="LOGO 1.png" alt="" />

          </div>

        
          <p>
            Convert speech to text easily using a Speech Recognition System
          </p>

          <div className="buttonWrapper">
              <button>
                <Link to='speech-to-text'>
                  START
                </Link>
              </button>
            
          </div>
        </div>

      </div>
    </div>
  )
}
export default Home