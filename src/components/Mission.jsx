import React from 'react';
import { Target, Globe, Award } from 'lucide-react';
import './Mission.css'; // We'll create a custom CSS file for animations

const Mission = () => {
    return (
        <section className="bg-gradient-to-br from-blue-50 to-blue-100  py-16 overflow-hidden">
       
            <div className="container mx-auto px-4">
                <div className="text-center mb-12 animate-fade-in-up">
                    <h2 className="text-4xl font-extrabold text-center text-blue-900 mb-16">Our <span className="text-blue-600">Mission</span></h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        We are committed to driving innovation, creating value, and making a positive impact in our industry and community.
                    </p>
                </div>
                
                <div className="grid md:grid-cols-3 gap-8">
                    {/* Mission Values */}
                    <div className="mission-card animate-card-rise hover:animate-card-hover text-center p-6 bg-gray-50 rounded-lg shadow-md transition-all duration-300 ease-in-out">
                        <Target className="mx-auto mb-4 text-blue-600 animate-icon-pulse" size={48}/>
                        <h3 className="text-xl font-semibold mb-3">Clear Vision</h3>
                        <p className="text-gray-600">
                            We maintain a laser-focused approach to our goals, continuously striving to exceed expectations and deliver exceptional results.
                        </p>
                    </div>
                    
                    <div className="mission-card animate-card-rise hover:animate-card-hover text-center p-6 bg-gray-50 rounded-lg shadow-md transition-all duration-300 ease-in-out delay-100">
                        <Globe className="mx-auto mb-4 text-green-600 animate-icon-pulse" size={48}/>
                        <h3 className="text-xl font-semibold mb-3">Global Impact</h3>
                        <p className="text-gray-600">
                            Our mission extends beyond boundaries, seeking to create meaningful change and contribute to global progress and innovation.
                        </p>
                    </div>
                    
                    <div className="mission-card animate-card-rise hover:animate-card-hover text-center p-6 bg-gray-50 rounded-lg shadow-md transition-all duration-300 ease-in-out delay-200">
                        <Award className="mx-auto mb-4 text-purple-600 animate-icon-pulse" size={48}/>
                        <h3 className="text-xl font-semibold mb-3">Excellence</h3>
                        <p className="text-gray-600">
                            We are dedicated to maintaining the highest standards of quality, integrity, and continuous improvement in everything we do.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Mission;