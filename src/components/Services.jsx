import { useState } from "react";
import { Code, Database, Server,CheckCircle } from "lucide-react"; // Ya kisi aur icon library se

const services = [
    { 
      icon: <Code className="w-12 h-12 text-blue-600" />, 
      title: "Software Development", 
      description: "Cutting-edge software solutions tailored to your business needs.",
      features: [
        "Custom Application Development",
        "Full-Stack Engineering",
        "Cloud-Native Solutions"
      ],
      color: "blue"
    },
    { 
      icon: <Database className="w-12 h-12 text-green-600" />, 
      title: "Data Analytics", 
      description: "Transform data into actionable insights with advanced analytics.",
      features: [
        "Predictive Modeling",
        "Business Intelligence",
        "Data Visualization"
      ],
      color: "green"
    },
    { 
      icon: <Server className="w-12 h-12 text-purple-600" />, 
      title: "Cloud Services", 
      description: "Scalable and secure cloud infrastructure solutions.",
      features: [
        "Migration Strategies",
        "Hybrid Cloud Management",
        "Security Optimization"
      ],
      color: "purple"
    }
  ];

const Services = () => {
  const [hoveredService, setHoveredService] = useState(null);

  return (
   
    <section className="bg-white py-30 px-6 mx-auto ">
   

   <h2 className="text-4xl font-extrabold text-center text-black mb-16">
   Our<span className="text-gray-500"> Services</span>
        </h2>
    

      <div className="grid md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            onMouseEnter={() => setHoveredService(index)}
            onMouseLeave={() => setHoveredService(null)}
            className={`bg-white p-6 rounded-xl shadow-lg transition-all duration-500 ease-in-out transform hover:-translate-y-4 
            ${
              hoveredService === index
                ? `border-2 border-${service.color}-500 scale-105`
                : "border-2 border-transparent"
            }`}
          >
            <div
              className={`flex justify-center mb-4 transform transition-transform duration-500 ${
                hoveredService === index ? "rotate-12 scale-110" : ""
              }`}
            >
              {service.icon}
            </div>
            <h3 className="text-xl font-semibold mb-3 text-center text-gray-800">
              {service.title}
            </h3>
            <p className="text-gray-600 text-center mb-4">{service.description}</p>
            <div
              className={`space-y-2 text-sm text-gray-700 transition-all duration-500 ${
                hoveredService === index ? "opacity-100" : "opacity-70"
              }`}
            >
              {service.features.map((feature, featureIndex) => (
                <div key={featureIndex} className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
