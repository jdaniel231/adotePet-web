
import React from 'react';

interface Testimonial {
  image: string;
  name: string;
  text: string;
}

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <img src={testimonial.image} alt={testimonial.name} className="w-24 h-24 rounded-full mx-auto mb-4" />
      <p className="text-gray-600 mb-4">"{testimonial.text}"</p>
      <p className="text-gray-800 font-bold">- {testimonial.name}</p>
    </div>
  );
};

export default TestimonialCard;
