import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize, MoreVertical, BookMarked } from 'lucide-react';
import img from "../assets/images/img7.jpg";
import vd1 from "../assets/images/vd1.mp4";

const NewsAndAnnouncement = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    const updateTime = () => setCurrentTime(video.currentTime);
    video.addEventListener('timeupdate', updateTime);
    video.addEventListener('loadedmetadata', () => setDuration(video.duration));
    return () => {
      video.removeEventListener('timeupdate', updateTime);
    };
  }, []);

  const togglePlay = (e) => {
    e.stopPropagation();
    if (videoRef.current.paused) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
    setIsPlaying(!isPlaying);
  };

  const toggleMute = (e) => {
    e.stopPropagation();
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(!isMuted);
  };

  const toggleFullScreen = (e) => {
    e.stopPropagation();
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    }
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  const handleSeek = (e) => {
    e.stopPropagation();
    const newTime = e.target.value;
    videoRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  return (
    <div 
      style={{
        backgroundImage: `url(${img})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      className='w-full min-h-screen p-2 sm:p-4 flex flex-col items-center'
    >
      <div className='text-center mb-4 sm:mb-6'>
        <h1 className='font-monserrat text-xl sm:text-2xl md:text-3xl lg:text-4xl'>
          Welcome to <span className='bg-[#D42A46] rounded-md text-white mx-1 p-1 sm:m-2 sm:p-2'>St.Andrew's</span>High School
        </h1>
      </div>

      <div className='w-full max-w-6xl mt-[10vw] flex flex-col lg:flex-row gap-4'>
        <div className='w-full lg:w-[60%] border object-cover overflow-hidden border-black relative bg-black aspect-video'>
          <video 
            ref={videoRef} 
            src={vd1} 
            className="w-full h-full cursor-pointer"
            onClick={togglePlay}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          ></video>
          {(isHovering || isPlaying) && (
            <div 
              className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-1 sm:p-2 transition-opacity duration-300"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              <div className="flex items-center mb-1 sm:mb-2">
                <input 
                  type="range" 
                  min="0" 
                  max={duration} 
                  value={currentTime}
                  onChange={handleSeek}
                  className="w-full"
                  onClick={(e) => e.stopPropagation()}
                />
              </div>
              <div className="flex justify-between items-center">
                <button onClick={togglePlay} className="mr-2 sm:mr-4">
                  {isPlaying ? <Pause size={16} className="sm:w-5 sm:h-5" /> : <Play size={16} className="sm:w-5 sm:h-5" />}
                </button>
                <div className="flex-grow text-xs hidden sm:block">
                  {formatTime(currentTime)} / {formatTime(duration)}
                </div>
                <button onClick={toggleMute} className="mx-1 sm:mx-2">
                  {isMuted ? <VolumeX size={16} className="sm:w-5 sm:h-5" /> : <Volume2 size={16} className="sm:w-5 sm:h-5" />}
                </button>
                <button onClick={toggleFullScreen} className="ml-1 sm:ml-2">
                  <Maximize size={16} className="sm:w-5 sm:h-5" />
                </button>
                <button className="ml-1 sm:ml-2" onClick={(e) => e.stopPropagation()}>
                  <MoreVertical size={16} className="sm:w-5 sm:h-5" />
                </button>
              </div>
            </div>
          )}
        </div>
        <div className='w-full lg:w-[40%] border p-1 rounded-md bg-[#ABC2E8] border-black'>
          <h1 className='w-full py-2 flex items-center font-caveat justify-center text-xl sm:text-2xl md:text-3xl text-white bg-[#183058]'>News & Announcements</h1>
          <div className='max-h-[50vh] lg:max-h-full overflow-y-auto'>
            {[1, 2, 3, 4].map((_, index) => (
              <div key={index} className='w-full p-2 gap-2 border-2 flex flex-col sm:flex-row justify-between items-center rounded-md mt-2'>
                <div className='flex items-center'>
                  <BookMarked size={20} className='text-[#5B74B1] mr-2' />
                  <span className='font-monserrat text-center text-xs sm:text-sm'>30 March 2024</span>
                </div>
                <h1 className='font-raleway text-xs sm:text-sm text-center sm:text-left'>School Re-opening Message for Parents (Grade-Nursery to Grade-I)</h1>
                <button className='border px-2 py-1 text-xs rounded-md hover:bg-[#204075] hover:text-white border-[#204075]'>View</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsAndAnnouncement;