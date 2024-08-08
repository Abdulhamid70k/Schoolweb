import React, { useState, useRef } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./view/Navbar";
import Header1 from "./view/Header1";
import Homepage from "./Components/Homepage";
import St_Society from "./view/St_Society";
import Vision from "./view/Vision";
import Calendar from "./view/Calendar";
import AdmissionGuidelines from "./view/AdmissionGuidelines";
import SchoolTimetable from "./view/SchoolTimetable";
import StudentTimetable from "./view/StudentTimeTable";
import SchoolInfo from "./view/SchoolInfo";
import FeeStructure from "./view/FeeStructure";
import AdmissionEnquiry from "./view/AdmissionEnquiry";
import Footer from "./Components/Footer";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const contactRef = useRef(null);

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Header1 isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Navbar isLoggedIn={isLoggedIn} scrollToContact={scrollToContact} />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/St_Society" element={<St_Society />} />
        <Route path="/Vision" element={<Vision />} />
        <Route path="/SchoolInfo" element={<SchoolInfo />} />
        <Route path="/AdmissionGuidelines" element={<AdmissionGuidelines />} />
        <Route path="/FeeStructure" element={<FeeStructure />} />
        <Route path="/AdmissionEnquiry" element={<AdmissionEnquiry />} />
        <Route path="/Calendar" element={<Calendar isLoggedIn={isLoggedIn} />} />
        <Route path="/SchoolTimetable" element={<SchoolTimetable />} />
        <Route path="/StudentTimetable" element={<StudentTimetable />} />
      </Routes>
      <div ref={contactRef}>
        <Footer />
      </div>
    </>
  );
};

export default App;