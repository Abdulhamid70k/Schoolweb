import React from 'react';
import { Facebook, Instagram, Youtube } from 'lucide-react';
import img1 from "../assets/images/playstore.png";
import img2 from "../assets/images/apppstore.png";

const Footer = () => {
  return (
    <footer className="bg-[#175B8D] text-white p-4 sm:p-6 lg:p-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Download Our App To Stay Connected</h2>
          <div className="flex justify-center space-x-2 sm:space-x-4">
            <img src={img1} alt="Get it on Google Play" className="h-8 sm:h-10 lg:h-12" />
            <img src={img2} alt="Download on the App Store" className="h-8 sm:h-10 lg:h-12" />
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row sm:justify-between space-y-6 sm:space-y-0 sm:space-x-8 lg:space-x-16">
          <div className="text-center sm:text-left sm:flex-1">
            <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Do you have a contact?</h3>
            <p className="text-xs sm:text-sm">
              St.Andrew's High School is a trusted CBSE Affiliated School situated in the heart of Jodhpur city. With well framed academics, sports and co-curricular activities aimed at the holistic development of children, we foster a wholesome curriculum that ensures a young learner develop into a responsible and independent global citizen.
            </p>
          </div>
          
          <div className="text-center sm:text-left sm:flex-1">
            <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Links</h3>
            <ul className="space-y-1 sm:space-y-2">
              <li><a href="#" className="text-sm hover:underline">Downloads</a></li>
              <li><a href="#" className="text-sm hover:underline">Fee Structure</a></li>
              <li><a href="#" className="text-sm hover:underline">News & Update</a></li>
              <li><a href="#" className="text-sm hover:underline">TC</a></li>
              <li><a href="#" className="text-sm hover:underline">Mandatory Form</a></li>
            </ul>
          </div>
          
          <div className="text-center sm:text-left sm:flex-1">
            <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Contact Us</h3>
            <p className="text-xs sm:text-sm mb-2">Beyond CHB, Katariya Choukha, Gopal Bari, Jhanwar Rd, Green Park, Jodhpur, Rajasthan 342008</p>
            <p className="text-xs sm:text-sm mb-2">+91 98751 75107</p>
            <p className="text-xs sm:text-sm mb-3 sm:mb-4">StAndrewHighSchool@gmail.com</p>
            
            <div className="space-y-2 sm:space-y-3">
              <button className="bg-orange-500 text-white py-1 sm:py-2 px-3 sm:px-4 rounded-full w-full text-xs sm:text-sm">
                BECOME A TEACHER
              </button>
              <button className="bg-white text-indigo-700 py-1 sm:py-2 px-3 sm:px-4 rounded-full w-full text-xs sm:text-sm">
                ENROL NOW
              </button>
              <button className="bg-orange-500 text-white py-1 sm:py-2 px-3 sm:px-4 rounded-full w-full text-xs sm:text-sm">
                CONTACT US
              </button>
            </div>
            
            <div className="flex justify-center sm:justify-start space-x-3 sm:space-x-4 mt-3 sm:mt-4">
              <a href="#" className="text-white hover:text-gray-300"><Facebook size={20} /></a>
              <a href="#" className="text-white hover:text-gray-300"><Instagram size={20} /></a>
              <a href="#" className="text-white hover:text-gray-300"><Youtube size={20} /></a>
            </div>
          </div>
        </div>
        
        <div className="mt-6 sm:mt-8 text-center text-xs sm:text-sm">
          <p>Copyright © 2024 St.Andrew's High School, Designed & Developed by Educase India.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
