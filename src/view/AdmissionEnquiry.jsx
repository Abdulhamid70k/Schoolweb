import React from 'react';
import logo from "../assets/images/logo.png";
import admissionFormPdf from '../assets/Docs/Admission-Enquiry-Form.pdf'; // Import your PDF file

const AdmissionEnquiry = () => {
  const handleViewPdfClick = () => {
    // Open PDF in a new tab/window
    window.open(admissionFormPdf, '_blank');
  };

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white shadow-md rounded-lg relative">
      <div className="absolute inset-0 z-0 opacity-5 pointer-events-none flex items-center justify-center">
        <img src={logo} alt="Watermark" className="w-2/3 h-2/3 object-contain filter grayscale" />
      </div>
      
      <div className="flex flex-col items-center mb-8 relative z-10">
        <img src={logo} alt="Logo" className="w-24 h-24 mb-4" />
        <h1 className="text-3xl font-bold text-center text-blue-900">Admission Enquiry Form</h1>
      </div>

      <div className='flex justify-end mb-8'>
        <button 
          onClick={handleViewPdfClick} 
          className="block bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-800 transition duration-300"
        >
          View PDF
        </button>
      </div>

      <form>
        <h2 className="text-2xl font-semibold mb-4">Student Details</h2>

        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 mb-2">NAME OF STUDENT</label>
          <input type="text" id="name" name="name" className="w-full px-3 py-2 border rounded-md" />
        </div>

        <div className="flex space-x-4 mb-4">
          <div className="w-1/2">
            <label htmlFor="dob" className="block text-gray-700 mb-2">DATE OF BIRTH</label>
            <input type="date" id="dob" name="dob" placeholder="dd-mm-yyyy" className="w-full px-3 py-2 border rounded-md" />
          </div>
          <div className="w-1/2">
            <label htmlFor="gender" className="block text-gray-700 mb-2">GENDER</label>
            <select id="gender" name="gender" className="w-full px-3 py-2 border rounded-md">
              <option value="">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>

        <div className="flex space-x-4 mb-4">
          <div className="w-1/2">
            <label htmlFor="class" className="block text-gray-700 mb-2">CLASS TO BE ADMITTED</label>
            <input type="text" id="class" name="class" placeholder="10th" className="w-full px-3 py-2 border rounded-md" />
          </div>
          <div className="w-1/2">
            <label htmlFor="caste" className="block text-gray-700 mb-2">CASTE</label>
            <input type="text" id="caste" name="caste" placeholder="(SC/ST/OBC/GEN/MINORITY/OTHER)" className="w-full px-3 py-2 border rounded-md" />
          </div>
        </div>

        <div className="flex space-x-4 mb-4">
          <div className="w-1/2">
            <label htmlFor="currentSchool" className="block text-gray-700 mb-2">CURRENT SCHOOL</label>
            <input type="text" id="currentSchool" name="currentSchool" placeholder="School Name" className="w-full px-3 py-2 border rounded-md" />
          </div>
          <div className="w-1/2">
            <label htmlFor="currentClass" className="block text-gray-700 mb-2">CLASS</label>
            <input type="text" id="currentClass" name="currentClass" placeholder="9th" className="w-full px-3 py-2 border rounded-md" />
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="address" className="block text-gray-700 mb-2">RESIDENCE'S ADDRESS</label>
          <textarea id="address" name="address" className="w-full px-3 py-2 border rounded-md"></textarea>
        </div>

        <div className="flex space-x-4 mb-4">
          <div className="w-1/2">
            <label htmlFor="street" className="block text-gray-700 mb-2">STREET/WARD NO.</label>
            <input type="text" id="street" name="street" className="w-full px-3 py-2 border rounded-md" />
          </div>
          <div className="w-1/2">
            <label htmlFor="building" className="block text-gray-700 mb-2">BUILDING NO./HOUSE NO.</label>
            <input type="text" id="building" name="building" className="w-full px-3 py-2 border rounded-md" />
          </div>
        </div>

        <div className="flex space-x-4 mb-4">
          <div className="w-1/2">
            <label htmlFor="landmark" className="block text-gray-700 mb-2">NEAR LANDMARK</label>
            <input type="text" id="landmark" name="landmark" className="w-full px-3 py-2 border rounded-md" />
          </div>
          <div className="w-1/2">
            <label htmlFor="city" className="block text-gray-700 mb-2">VILLAGE/TOWN/CITY</label>
            <input type="text" id="city" name="city" className="w-full px-3 py-2 border rounded-md" />
          </div>
        </div>

        <h2 className="text-2xl font-semibold mb-4">Parents Details</h2>

        <div className="mb-4">
          <label htmlFor="fatherName" className="block text-gray-700 mb-2">FATHER NAME</label>
          <input type="text" id="fatherName" name="fatherName" placeholder="First Last" className="w-full px-3 py-2 border rounded-md" />
        </div>

        <div className="flex space-x-4 mb-4">
          <div className="w-1/2">
            <label htmlFor="fatherQualification" className="block text-gray-700 mb-2">QUALIFICATION</label>
            <input type="text" id="fatherQualification" name="fatherQualification" className="w-full px-3 py-2 border rounded-md" />
          </div>
          <div className="w-1/2">
            <label htmlFor="fatherOccupation" className="block text-gray-700 mb-2">OCCUPATION</label>
            <input type="text" id="fatherOccupation" name="fatherOccupation" className="w-full px-3 py-2 border rounded-md" />
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="fatherOffice" className="block text-gray-700 mb-2">OFFICE/COMPANY NAME</label>
          <input type="text" id="fatherOffice" name="fatherOffice" className="w-full px-3 py-2 border rounded-md" />
        </div>

        <div className="mb-4">
          <label htmlFor="motherName" className="block text-gray-700 mb-2">MOTHER'S NAME</label>
          <input type="text" id="motherName" name="motherName" className="w-full px-3 py-2 border rounded-md" />
        </div>

        <div className="flex space-x-4 mb-4">
          <div className="w-1/2">
            <label htmlFor="motherQualification" className="block text-gray-700 mb-2">QUALIFICATION</label>
            <input type="text" id="motherQualification" name="motherQualification" className="w-full px-3 py-2 border rounded-md" />
          </div>
          <div className="w-1/2">
            <label htmlFor="motherOccupation" className="block text-gray-700 mb-2">OCCUPATION</label>
            <input type="text" id="motherOccupation" name="motherOccupation" className="w-full px-3 py-2 border rounded-md" />
          </div>
        </div>

        <div className="flex space-x-4 mb-4">
          <div className="w-1/2">
            <label htmlFor="fatherContact" className="block text-gray-700 mb-2">CONTACT NUMBER (FATHER)</label>
            <input type="tel" id="fatherContact" name="fatherContact" className="w-full px-3 py-2 border rounded-md" />
          </div>
          <div className="w-1/2">
            <label htmlFor="motherContact" className="block text-gray-700 mb-2">CONTACT NUMBER (MOTHER)</label>
            <input type="tel" id="motherContact" name="motherContact" className="w-full px-3 py-2 border rounded-md" />
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="leavingReason" className="block text-gray-700 mb-2">REASON FOR LEAVING CURRENT SCHOOL</label>
          <textarea id="leavingReason" name="leavingReason" className="w-full px-3 py-2 border rounded-md"></textarea>
        </div>

        <div className="mb-4">
          <label htmlFor="whyTulsi" className="block text-gray-700 mb-2">WHY TULSI KIDS SCHOOL?</label>
          <textarea id="whyTulsi" name="whyTulsi" className="w-full px-3 py-2 border rounded-md"></textarea>
        </div>

        <div className="mb-6">
          <label htmlFor="howKnow" className="block text-gray-700 mb-2">HOW DID YOU COME TO KNOW ABOUT TULSI KIDS SCHOOL?</label>
          <textarea id="howKnow" name="howKnow" className="w-full px-3 py-2 border rounded-md"></textarea>
        </div>

        <button type="submit" className="w-full py-2 text-white bg-blue-500 hover:bg-blue-600 rounded-md">
          Send enquiry!
        </button>
      </form>
    </div>
  );
};

export default AdmissionEnquiry;
