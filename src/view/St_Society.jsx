import React from "react";
import UpdatesBar from "./UpdatesBar";
import Slider from "../view/Slider";
import img1 from "../assets/images/meb1.png";
import img2 from "../assets/images/meb2.png";
import img3 from "../assets/images/memb3.png";
import img4 from "../assets/images/memb4.jpeg";
import img5 from "../assets/images/memb5.jpeg";
import img6 from "../assets/images/memb6.jpeg";
import img7 from "../assets/images/memb7.jpeg";
import img8 from "../assets/images/memb8.jpeg";
import img9 from "../assets/images/memb9.jpeg";


const MemberCard = ({ image, name, position }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col h-full">
      <div className="aspect-w-4 aspect-h-3 bg-gray-200">
        <img src={image} alt={name} className="w-full h-full object-contain" />
      </div>
      <div className="p-4 flex-grow">
        <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
        <p className="text-sm text-gray-600">{position}</p>
      </div>
    </div>
  );
};

const ManagementCommittee = () => {
  return (
    <div className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-e text-gray-900 text-center mb-8">
          Management & Committee
        </h2>
        <p className="text-center text-gray-600 mb-2">
          The St.Andrew's School Education Society took its shape in 1976, with
          the strong notion that education is not just for improving the lives
          but for leaving behind a better community and world than we found.
          Guided by the sole cause of providing quality education for the
          deserving youth and children, the society embarked on its instruction
          journey. After 45 years and with over thousands of students placed
          throughout India and abroad, St.Andrew's Society boasts of its
          credential
        </p>
        

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <MemberCard
            image={img1}
            name="Sri Jellela Tirupathi Reddy"
            position="Founder"
          />
          <MemberCard
            image={img2}
            name="Smt Mary Philomena"
            position="Founder"
          />
          <MemberCard
            image={img3}
            name="Maramreddy Prashanthi Reddy"
            position="President / Principal"
          />
          <MemberCard
            image={img4}
            name="Yeluvaka Shravan Kumar"
            position="Vice-President"
          />
          <MemberCard
            image={img5}
            name="Vangore Paul David"
            position="Secretary/Correspondent"
          />
          <MemberCard
            image={img6}
            name="Medapaty Swathi Reddy"
            position="Treasurer"
          />
          <MemberCard
            image={img7}
            name="Jellela Ranga Reddy"
            position="Joint Secretary"
          />
          <MemberCard
            image={img8}
            name="Atluri Vijaya Kumari"
            position="Executive member"
          />
          <MemberCard
            image={img9}
            name="Oruganti Subba Lakshmi"
            position="Executive member"
          />
          {/* Add more MemberCard components for additional members */}
        </div>
      </div>
    </div>
  );
};

const St_Society = () => {
  const updates = [
    "New feature released!",
    "Maintenance scheduled for next week",
    "Check out our latest blog post",
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
     
      <UpdatesBar updates={updates} />
      <Slider />
      <ManagementCommittee />
      
    </div>
  );
};

export default St_Society;
