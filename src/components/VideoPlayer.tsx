import { cn } from "@/lib/utils.ts"
import { VideoPlayerProps } from "@/types"

const VideoPlayer = ({ url, imgUrl, className }: VideoPlayerProps) => {
  // const videoRef = useRef<HTMLVideoElement>(null)
  // const [isPlaying, setIsPlaying] = useState(false)
  // const [showButton, setShowButton] = useState(false)
  //
  // const handlePlayPause = () => {
  //   if (videoRef.current) {
  //     if (videoRef.current.paused) {
  //       videoRef.current.play()
  //     } else {
  //       videoRef.current.pause()
  //     }
  //   }
  // }
  //
  // useEffect(() => {
  //   const video = videoRef.current
  //   console.log()
  //
  //   const handlePlay = () => setIsPlaying(true)
  //   const handlePause = () => setIsPlaying(false)
  //
  //   if (video) {
  //     video.addEventListener("play", handlePlay)
  //     video.addEventListener("pause", handlePause)
  //   }
  //
  //   return () => {
  //     if (video) {
  //       video.removeEventListener("play", handlePlay)
  //       video.removeEventListener("pause", handlePause)
  //     }
  //   }
  // }, [])
  //
  // const onPlay = () => {
  //   setTimeout(() => setShowButton(false), 100)
  // }

  return (
    <div className="relative">
      <video controls src={url} poster={imgUrl} className={cn("rounded-3xl w-full", className)} />

      {/*<button className="absolute top-[45%] left-[47%]" onClick={handlePlayPause}>*/}
      {/*  /!*{isPlaying ?*!/*/}
      {/*  /!*  <span className={`transition-opacity duration-300 ${showButton ? "opacity-100" : "opacity-0"}`}>*!/*/}
      {/*  /!*    <BlueVideoPlayIcon />*!/*/}
      {/*  /!*  </span>*!/*/}
      {/*  {!isPlaying && <BigVideoPlayIcon />}*/}
      {/*</button>*/}
    </div>
  )
}

export default VideoPlayer
