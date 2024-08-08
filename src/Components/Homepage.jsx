import React, { useState } from "react";
import UpdatesBar from "../view/UpdatesBar";
import Slider from "../view/Slider";
import { X, Mail } from "lucide-react";
import NewsAndAnouncement from "../view/NewsAndAnouncement";
import img1 from "../assets/images/brtsh.png";
import img2 from "../assets/images/excel.png";
import img3 from "../assets/images/toi.png";
import StudentsSlider from "../view/StudentsSlider";
import FAQ from "../view/FAQ";
import Students from "../view/Students";

const AdmissionModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-[#F2F2F2] bg-opacity-50 flex justify-center items-center z-50 p-4">
      <div className="bg-white p-4 sm:p-6 rounded-lg w-full max-w-md relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          aria-label="Close"
        >
          <X size={20} />
        </button>
        <h2 className="text-xl sm:text-2xl text-center mb-4">
          Admissions Open for 2024 - 2025
        </h2>
        <form className="space-y-3 sm:space-y-4">
          <input
            className="w-full p-2 border rounded text-sm"
            placeholder="Enter Name of the Student *"
            required
          />
          <input
            className="w-full p-2 border rounded text-sm"
            placeholder="Enter Name of the Parent *"
            required
          />
          <input
            className="w-full p-2 border rounded text-sm"
            type="email"
            placeholder="Enter Email Address *"
            required
          />
          <div className="flex">
            <select className="p-2 border rounded text-sm" defaultValue="+91">
              <option value="+91">+91</option>
            </select>
            <input
              className="flex-grow p-2 border rounded text-sm"
              placeholder="Enter Mobile Number *"
              required
            />
          </div>
          <select className="w-full p-2 border rounded text-sm" required>
            <option value="">Select Grade *</option>
            {/* Add grade options here */}
          </select>
          <input
            className="w-full p-2 border rounded text-sm"
            placeholder="Enter Locality/Area *"
            required
          />
          <div className="flex items-center space-x-2">
            <input
              className="flex-grow p-2 border rounded text-sm"
              placeholder="Enter text as shown"
              required
            />
            <button type="button" className="p-2 border rounded">
              ↻
            </button>
          </div>
          <div className="flex items-center space-x-2">
            <input type="checkbox" id="agreement" />
            <label htmlFor="agreement" className="text-xs sm:text-sm">
              I agree to receive information regarding my submitted enquiry on
              St.Andrew's High School
            </label>
          </div>
          <button
            type="submit"
            className="w-full p-2 bg-blue-500 text-white rounded text-sm"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

const EnquiryWidget = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="fixed right-0 flex top-1/2 transform -translate-y-1/2 bg-[#175b8d] text-white p-2 sm:p-3 rounded-l-lg shadow-lg hover:bg-green-600 transition-colors duration-300 z-40"
      style={{ writingMode: "vertical-rl" }}
      aria-label="Open Enquiry Form"
    >
      <Mail className="w-4 sm:w-6 rotate-90 h-4 sm:h-6 mb-1 sm:mb-2" />
      <span className="text-xs sm:text-sm">Online Application</span>
    </button>
  );
};

const Homepage = ({ setIsLoggedIn }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const updates = [
    "New feature released!",
    "Maintenance scheduled for next week",
    "Check out our latest blog post",
  ];

  const events = [
    { date: "3rd Mar", description: "World Wild Life Day" },
    { date: "8th Mar", description: "International Women's Day" },
    { date: "14th Mar", description: "Pi Day" },
    { date: "20th Mar", description: "World Sparrow Day" },
    { date: "22nd Mar", description: "World Water Day" },
    { date: "23rd Mar", description: "World Meteorological Day" },
    { date: "27th Mar", description: "World Theatre Day" },
    { date: "2nd Apr", description: "World Autism Awareness Day" },
  ];

  return (
    <div className="relative">
      <AdmissionModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
      <EnquiryWidget onClick={() => setIsModalOpen(true)} />

      <UpdatesBar updates={updates} />
      <Slider />
     
      <div className="w-full px-4 sm:px-8 lg:px-[15vw] py-8 sm:py-12 lg:py-16 bg-white">
        <div className="flex flex-col items-center mb-6 sm:mb-8">
          <h1 className="font-caveat text-2xl sm:text-3xl mb-2">Welcome to our</h1>
          <h1 className="font-montserrat text-2xl sm:text-3xl mb-4 text-center">
            St.Andrew's High School
          </h1>
          <div className="w-[110px] h-[5px] bg-[#038137] rounded-full relative">
            <div className="absolute right-0 top-0 w-5 h-full bg-[#FFCD29] rounded-full"></div>
          </div>
        </div>
        <div className="flex flex-col gap-4 justify-center items-center">
          <p className="font-raleway text-sm sm:text-base text-center sm:text-left">
            "Knowledge is Liberation". With a motto to engender exceptional
            students who in turn make an astonishing society to live in, the
            Pallavi educational society has initiated Pallavi Model School in
            June 1994. With high standards of academics clubbed with advanced
            curriculum with various facilities Sports, Libraries, Labs, Arts and
            more, Pallavi Alwal, the Best Schools in Hyderabad, has evolved into
            a prosperous Educational Institute in the past 30+ years.
          </p>
          <p className="font-raleway text-sm sm:text-base text-center sm:text-left">
            With a legacy of 30+ Years, we stand tall among the best schools in
            Hyderabad with our wings spread across 20+ schools in twin cities.
            Apart from academic excellence, we additionally accentuate on
            multi-faceted development of the child by examining and
            understanding the children fascinates and inspiriting them to reach
            the zenith of prosperity. We believe that if parents and teachers
            cumulate, we can harness the ebullience of our children and guide
            them to be self-ample and useful members of society.
          </p>
        </div>
      </div>
      <NewsAndAnouncement />

      <div className="w-full px-4 sm:px-8 lg:px-[12vw] mt-8 gap-8 bg-white flex flex-col items-center">
        <div className="flex flex-col items-center mb-6 sm:mb-8">
          <h1 className="font-caveat text-2xl sm:text-3xl mb-2">Latest Happenings</h1>
          <div className="w-[110px] h-[5px] bg-[#038137] rounded-full relative">
            <div className="absolute right-0 top-0 w-5 h-full bg-[#FFCD29] rounded-full"></div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-20 w-full">
          <div className="w-full lg:w-1/2 p-4 bg-[#007DBF] rounded-2xl">
            <div className="w-full flex flex-col gap-3 mb-6">
              <h1 className="font-caveat text-3xl sm:text-4xl lg:text-5xl text-white">
                Upcoming Events
              </h1>
              <div className="w-[110px] h-[5px] bg-[#ffff] rounded-full relative">
                <div className="absolute right-0 top-0 w-5 h-full bg-[#FFCD29] rounded-full"></div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {events.map((event, index) => (
                <div key={index} className="text-white">
                  <h1 className="font-montserrat text-base sm:text-lg">{event.date}</h1>
                  <h1 className="font-raleway w-full sm:w-[70%] py-2 text-lg sm:text-xl border-b-2 border-dashed">
                    {event.description}
                  </h1>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex flex-col gap-5 rounded-2xl p-4 sm:p-6">
            <div className="w-full flex flex-col gap-3 mb-6">
              <div className="flex items-center justify-between">
                <h1 className="font-caveat text-3xl sm:text-4xl lg:text-5xl text-black">
                  School Accolades
                </h1>
                <button className="font-raleway hover:bg-slate-300 border px-3 py-2 border-[#007DBF] text-sm sm:text-base">
                  See All
                </button>
              </div>
              <div className="w-28 h-[5px] bg-[#038137] rounded-full relative">
                <div className="absolute right-0 top-0 w-5 h-full bg-[#FFCD29] rounded-full"></div>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4 sm:gap-6">
                <img src={img1} alt="" className="w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 object-cover" />
                <div>
                  <h2 className="font-montserrat text-lg sm:text-xl">
                    British Council School <br /> Award
                  </h2>
                  <span className="font-raleway text-sm sm:text-base">2020-2023</span>
                </div>
              </div>

              <div className="flex items-center gap-4 sm:gap-6">
                <img src={img2} alt="" className="w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 object-cover" />
                <div>
                  <h2 className="font-montserrat text-lg sm:text-xl">#1 Emerging School</h2>
                  <p className="font-montserrat text-base sm:text-lg">
                    Ranked by Times of India School
                  </p>
                  <span className="font-raleway text-sm sm:text-base">Rankings 2017</span>
                </div>
              </div>

              <div className="flex items-center gap-4 sm:gap-6">
                <img src={img3} alt="" className="w-20 sm:w-24 lg:w-28 object-cover" />
                <div>
                  <h2 className="font-montserrat text-lg sm:text-xl">
                    School Excellence Awards
                  </h2>
                  <span className="font-raleway text-sm sm:text-base">
                    Awarded by Brainfeed in 2017
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <StudentsSlider />
      <FAQ />
      <Students />
    </div>
  );
};

export default Homepage;