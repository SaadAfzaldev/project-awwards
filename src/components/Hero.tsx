import { useRef, useState } from "react"

export default function Hero() {

    const [currentIndex, setCurrentIndex] = useState(1)
    const [hasClicked, setHasClicked] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    const [loadedVideo, setLoadedVideo] = useState(0)

    const totalVideos = 4
    const nextVideoRef = useRef(null)


        const miniVideoClickHandler = () => {   

            setHasClicked(true)
            setCurrentIndex((prevIndex) => prevIndex + 1)

        }

        const getVideoSource = (index:any ) => {
            return `videos/hero-${index}.mp4`
        }

        const handleVideoLoad = () => {
            setLoadedVideo((prev) => prev + 1)
        }

  return (
    <div className="relative h-dvh w-screen overflow-x-hidden">   
        <div id="video-container" className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75">
            <div>
                <div className="mask-clip-path absolute-center absolute z-50 size-64 cursor-pointer overflow-hidden rounded-lg ">
                    <div onClick={miniVideoClickHandler} className="origin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100 cursor-pointer">
                           <video 
                           ref={nextVideoRef}
                           src={getVideoSource(currentIndex + 1)!}
                           loop
                           muted
                          id="currentVideo"
                          className="size-64 origin-center scale-150 object-cover object-center"
                          onLoadedData={handleVideoLoad}
                          />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )  
}