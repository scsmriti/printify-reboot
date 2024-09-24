import React from 'react';

const Testimonials = () => {
  const testimonials = [
    { name: "John Doe", feedback: "Amazing service and top-notch products!" },
    { name: "Jane Smith", feedback: "I love how easy it is to customize my items." },
    { name: "Mike Johnson", feedback: "Fast delivery and excellent customer support!" }
  ];

  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-6 bg-white rounded-lg shadow-lg">
              <p className="italic mb-4">"{testimonial.feedback}"</p>
              <h4 className="font-semibold">{testimonial.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
