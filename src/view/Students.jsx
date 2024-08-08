import React, { useState, useEffect } from 'react'
import activity1 from "../assets/images/Taekwondo.jpg"
import activity2 from "../assets/images/swimming.jpg"
import activity3 from "../assets/images/skating.jpg"
import activity4 from "../assets/images/sports.jpg"
import activity5 from "../assets/images/Library.jpg"
import activity6 from "../assets/images/labs.jpg"
import activity7 from "../assets/images/Dance-Music.jpg"
import activity8 from "../assets/images/Arts.jpg"
import activity9 from "../assets/images/robotics-1.jpg"
import speaks1 from "../assets/images/studentspeaks1.jpg"
import speaks2 from "../assets/images/studentspeaks2.jpg"
import speaks3 from "../assets/images/studentspeaks3.jpg"
import speaks4 from "../assets/images/studentspeaks4.jpg"
import speaks5 from "../assets/images/studentspeaks5.jpg"

const Students = () => {
  const activities = [
    { img: activity1, title: "Taekwondo" },
    { img: activity2, title: "Swimming" },
    { img: activity3, title: "Skating" },
    { img: activity4, title: "Sports" },
    { img: activity5, title: "Library" },
    { img: activity6, title: "Labs" },
    { img: activity7, title: "Dance & Music" },
    { img: activity8, title: "Arts" },
    { img: activity9, title: "Robotics" }
  ]

  const speaksImages = [speaks1, speaks2, speaks3, speaks4, speaks5]
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % speaksImages.length)
    }, 3000) // Change slide every 3 seconds

    return () => clearInterval(timer)
  }, [speaksImages.length])

  return (
    <div className="w-full p-2 flex flex-col justify-center items-center md:flex-row md:min-h-screen">
      <div className="w-full flex items-center justify-center md:w-1/2 pr-2 mb-4 md:mb-0">
        <div className="grid w-full sm:w-[90%] md:w-[78%] grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-0.5">
          {activities.map((activity, index) => (
            <div key={index} className="w-full aspect-square relative group overflow-hidden">
              <img 
                src={activity.img} 
                alt={activity.title} 
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white text-center font-bold text-sm sm:text-base">{activity.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full flex items-center flex-col md:w-1/2 pl-2 relative md:min-h-[70vh]">
        <h2 className="text-xl sm:text-2xl mb-4 font-bold">Students Speak</h2>
        <div className="w-[80px] sm:w-[110px] mb-4 sm:mb-[3vw] h-[3px] sm:h-[5px] bg-[#038137] rounded-full relative">
          <div className="absolute right-0 top-0 w-4 sm:w-5 h-full bg-[#FFCD29] rounded-full"></div>
        </div>
        <div className="relative w-full max-w-md mx-auto"> 
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out" 
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {speaksImages.map((img, index) => (
                <img 
                  key={index}
                  src={img} 
                  alt={`Student speaks ${index + 1}`} 
                  className="w-full h-48 sm:h-64 object-cover flex-shrink-0"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Students