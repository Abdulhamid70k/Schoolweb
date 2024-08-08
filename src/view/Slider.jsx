import React, { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import img1 from "../assets/images/img1.webp";
import img2 from "../assets/images/img2.webp";
import img3 from "../assets/images/img3.webp";
import img4 from "../assets/images/img4.webp";
import img5 from "../assets/images/img5.webp";
import img6 from "../assets/images/img6.jpg";

const Slider = () => {
  const images = [img1, img2, img3, img4, img5, img6];
 
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [currentIndex]);

  const goToPrevious = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setNextIndex(currentIndex);
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    }
  };

  const goToNext = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setNextIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
      setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    }
  };

  const handleTransitionEnd = () => {
    setIsTransitioning(false);
  };

  return (
    <div className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh] bg-white overflow-hidden">
      <div
        className="absolute inset-0 bg-center bg-cover transition-opacity duration-1000 ease-in-out"
        style={{ backgroundImage: `url(${images[currentIndex]})`, opacity: isTransitioning ? 0 : 1 }}
        onTransitionEnd={handleTransitionEnd}
      />
      <div
        className="absolute inset-0 bg-center bg-cover transition-opacity duration-1000 ease-in-out"
        style={{ backgroundImage: `url(${images[nextIndex]})`, opacity: isTransitioning ? 1 : 0 }}
      />
      <button 
        className="absolute top-1/2 -translate-y-1/2 left-2 sm:left-4 p-1 sm:p-2 bg-black/30 rounded-full cursor-pointer focus:outline-none focus:ring-2 focus:ring-white"
        onClick={goToPrevious}
        aria-label="Previous image"
      >
        <ChevronLeft size={24} className="text-white sm:w-8 sm:h-8" />
      </button>
      <button 
        className="absolute top-1/2 -translate-y-1/2 right-2 sm:right-4 p-1 sm:p-2 bg-black/30 rounded-full cursor-pointer focus:outline-none focus:ring-2 focus:ring-white"
        onClick={goToNext}
        aria-label="Next image"
      >
        <ChevronRight size={24} className="text-white sm:w-8 sm:h-8" />
      </button>
    </div>
  );
};

export default Slider;