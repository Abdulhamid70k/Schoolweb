import React from 'react';
import UpdatesBar from './UpdatesBar';
import Slider from "../view/Slider";
import Footer from '../Components/Footer';

const Vision = () => {
    const updates = [
        "New feature released!",
        "Maintenance scheduled for next week",
        "Check out our latest blog post",
    ];

    return (
        <div>
          
            <UpdatesBar updates={updates} />
            <Slider />
            <div className="p-6">
                <div className="border border-gray-300 p-6 mt-6">
                    <h2 className="text-center text-2xl font-bold mb-6">Vision & Mission</h2>
                    <h3 className="text-center italic mb-6">
                        “Sow an act, and you reap a habit<br/>
                        Sow a habit and you reap a character<br/>
                        Sow a character and you reap a destiny”.
                    </h3>
                    <div className="mt-6">
                        <h4 className="text-xl font-semibold mb-2">Our Vision:</h4>
                        <p className="mb-4">
                            To fully utilize the caring and stimulating learning environment with an orientation of “Innovating minds, elevating souls across the whole curriculum, which maximizes individual potential and ensure that no matter what our ability level is, we are well equipped to meet the challenges of education, work and life.
                        </p>
                    </div>
                    <div className="mt-6">
                        <h4 className="text-xl font-semibold mb-2">Our Mission:</h4>
                        <p className="mb-4">
                            Tulsi Kids is a pioneer in quality education which is constantly tuned into the newest of technologies, with the best team of academicians that is dedicated to constantly upgrade its unique & futuristic system of education. “To make learning creative, interesting, interactive and engaging, through a system which is constructive, comprehensive, practical and futuristic”.
                        </p>
                        <p className="mb-4">
                            Tulsi Kids School management team is a unique combination of experienced, qualified teachers and, it strives to achieve the objectives of the organization via continuous research, introduction of latest training methodologies and follow up to ensure adherence to set guidelines.
                        </p>
                    </div>
                    <div className="mt-6">
                        <h4 className="text-xl font-semibold mb-2">Aims & Objectives:</h4>
                        <p className="mb-4">
                            It has a distinct culture in the cradle of which promising children are progressively acquiring good traits, habits and education. Besides the school motto of Honour, Faith and Excellence, it also upholds the essence of Indian culture and heritage as well as keeping its door open to modern thought and scientific outlook. The aim of the school is to create a free and healthy atmosphere to inculcate the spirit of nationalism, brotherhood, a sense of discipline, gentle manners, and refined tastes. Equal importance is being given to build a healthy and strong body through physical exercise, games, and sports. Maximum efforts are being put in to galvanize the hidden talents of students, build their confidence, and create awareness so that when they grow up they may be ready to face the competitive world. Students have been encouraged to participate in different fields of extra-curricular activities like inter-school, fancy dress competitions, science and general knowledge quizzes, etc. English is the medium of instruction and Hindi as the national language is taught from beginner level. Computer is taught from Class 1 onwards.
                        </p>
                        <p className="mb-4">
                            To provide a caring environment in which everyone feels that their efforts and contributions are valued.
                        </p>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Vision;
