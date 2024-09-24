import React from 'react';

const Features = () => {
  const features = [
    { title: "Fast Delivery", description: "Get your products delivered in record time." },
    { title: "High Quality", description: "Premium quality products guaranteed." },
    { title: "Customizable", description: "Design your products the way you want." }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
