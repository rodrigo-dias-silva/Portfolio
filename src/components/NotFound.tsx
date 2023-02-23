import Lottie from 'lottie-react'
import error404 from '../assets/lottieGif/404.json'


export default function NotFound() {
  return (
    <Lottie animationData={error404} loop={true} />
  )
}
