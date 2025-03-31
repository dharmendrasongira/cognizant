
import { Globe } from 'lucide-react';
import './Mission.css';

const Mission = () => {
  return (
    <section className="bg-gra-200 py-30 overflow-hidden">
      <div className="container mx-auto px-4">

        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-3/5 p-6 md:pr-16 mission-text">
          <h2 className="text-4xl font-extrabold text-center text-black mb-12">Our <span className="text-gray-500">Mission</span></h2>
        
            <h3 className="text-3xl font-semibold mb-6 text-black">Global Impact</h3>
            <p className="text-gray-700 text-lg mb-6 leading-relaxed">
              Our mission extends beyond conventional boundaries, seeking to create meaningful change and contribute to global progress through innovative solutions and collaborative partnerships.
            </p>
            <p className="text-gray-600 mb-6">
              We believe in fostering connections across cultures and markets to build solutions that address universal challenges while respecting local contexts and needs.
            </p>
            <p className="text-gray-600 mb-6">
              By combining cutting-edge technology with human-centered design, we aim to develop products and services that not only solve problems but also enhance lives and communities around the world.
            </p>
            <div className="mt-8">
              <h4 className="text-xl font-medium text-black mb-4 hover-highlight">Our Commitment</h4>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start ">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Sustainable development practices that preserve resources for future generations</span>
                </li>
                <li className="flex items-start ">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Ethical business conduct that prioritizes transparency and accountability</span>
                </li>
                <li className="flex items-start ">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Inclusive innovation that considers diverse perspectives and needs</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="md:w-2/5 flex justify-center p-6">
            <div className="icon-container">
              <Globe className="text-black globe-icon" size={120} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;