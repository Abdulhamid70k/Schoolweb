import React from 'react';
import Slider from 'react-slick';
import img from "../assets/images/ohs.webp"
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const testimonials = [
  {
    id: 1,
    name: 'Praveen',
    text: 'It is indeed the best CBSE School in Jodhpur. I recommend it for holistic development of children.',
  },
  {
    id: 2,
    name: 'Manish',
    text: 'Exceptional CBSE School! I am very glad to be a part of the B.R.Birla Public School family!',
  },
  {
    id: 3,
    name: 'Kuldeep',
    text: 'I truly appreciate the quality of academics and other co-curricular activities taking place in the school!',
  },
];

const customStyles = `
  .slick-dots li button:before {
    color: white;
  }
  .slick-dots li.slick-active button:before {
    color: white;
  }
`;

const StudentsSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
  };

  return (
    <div className="relative">
      <style>{customStyles}</style>
      <img
        src={img}
        alt="Happy Students"
        className="w-full h-auto object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#45458C] via-[#45458C] to-transparent md:w-2/5 w-full">
        <div className="h-full flex items-center">
          <div className="container mx-auto px-4">
            <Slider {...settings}>
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="text-white">
                  <h2 className="text-2xl md:text-4xl font-bold mb-2 md:mb-4">Our Happy Students!</h2>
                  <p className="text-sm md:text-xl mb-2 md:mb-4">{testimonial.text}</p>
                  <div className="flex items-center">
                    <div className="w-8 h-8 md:w-10 md:h-10 bg-gray-300 rounded-full mr-2 md:mr-3"></div>
                    <span className="font-semibold text-sm md:text-base">{testimonial.name}</span>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentsSlider;