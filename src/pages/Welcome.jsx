import { useNavigate }from 'react-router-dom'
import welcomeImage from "../assets/images/welcomeimage.png"

const Welcome = () => {
  return (
    <div className="bg-[url('./assets/images/bgimage.png')] h-screen bg-cover bg-center">
        <h3>Savory & Sweets</h3>
        <img src={welcomeImage} alt="Welcome Image" />
    </div>
  )
}

export default Welcome