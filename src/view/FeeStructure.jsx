import React from 'react';
import UpdatesBar from './UpdatesBar';
import Slider from './Slider';
import Footer from '../Components/Footer';
import logo from "../assets/images/logo.png";

// Import your image and PDF file
import feeStructureImage from "../assets/images/STANDREWSFEESTRUCTURE2024-25.webp";
import feeStructurePdf from "../assets/Docs/STANDREWSFEESTRUCTURE2024-25.pdf";

const FeeStructure = () => {
  const handleViewPdfClick = () => {
    // Open PDF in a new tab/window
    window.open(feeStructurePdf, '_blank');
  };

  const updates = [
    "New feature released!",
    "Maintenance scheduled for next week",
    "Check out our latest blog post",
  ];

  return (
    <div>
      <UpdatesBar updates={updates} />
      <Slider />
      
      <div className="max-w-6xl mx-auto p-4 relative">
        <div className="bg-white shadow-md rounded-lg p-6 mt-8 relative overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-5 pointer-events-none flex items-center justify-center">
            <img src={logo} alt="Watermark" className="w-2/3 h-2/3 object-contain filter grayscale" />
          </div>
          <div className="flex flex-col items-center mb-8 relative z-10">
            <img src={logo} alt="Logo" className="w-24 h-24 mb-4" />
            <h1 className="text-3xl font-bold text-center text-blue-900">Fee Structure (Session 2024-25)</h1>
          </div>
          <div className='flex justify-end mb-8'>
            <button 
              onClick={handleViewPdfClick} 
              className="block bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-800 transition duration-300"
            >
              View PDF
            </button>
          </div>
          <img 
            src={feeStructureImage} 
            alt="Fee Structure 2024-25" 
            className="w-full"
          />
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default FeeStructure;