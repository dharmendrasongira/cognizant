import { useState } from 'react';
import { Linkedin, Twitter } from 'lucide-react';

const teamMembers = [
  {
    name: "Emily Rodriguez",
    role: "Chief Executive Officer",
    image: "/api/placeholder/200/200",
    bio: "Visionary leader with 15 years of experience in technology and innovation.",
    linkedin: "#",
    twitter: "#",
    github: "#"
  },
  {
    name: "Michael Chen",
    role: "Chief Technology Officer",
    image: "/api/placeholder/200/200",
    bio: "Tech expert driving cutting-edge solutions and strategic innovation.",
    linkedin: "#",
    twitter: "#",
    github: "#"
  },
  {
    name: "Sarah Thompson",
    role: "Chief Operations Officer",
    image: "/api/placeholder/200/200",
    bio: "Operations maestro ensuring seamless execution of our company's vision.",
    linkedin: "#",
    twitter: "#",
    github: "#"
  },
  {
    name: "David Kim",
    role: "Chief Product Officer",
    image: "/api/placeholder/200/200",
    bio: "Product strategist with a passion for user-centric design and innovation.",
    linkedin: "#",
    twitter: "#",
    github: "#"
  }
];

const TeamSection = () => {
  const [hoveredMember, setHoveredMember] = useState(null);

  return (

    <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-center text-blue-900 mb-16 tracking-tight">
          Our <span className="text-blue-600">Leadership</span>
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-lg overflow-hidden 
                transform transition-all duration-300 hover:scale-105 
                hover:shadow-2xl group relative"
              onMouseEnter={() => setHoveredMember(index)}
              onMouseLeave={() => setHoveredMember(null)}
            >
              <div className="relative">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-64 object-cover 
                    transition-transform duration-300 
                    group-hover:scale-110"
                />
                {hoveredMember === index && (
                  <div className="absolute inset-0 bg-blue-600 bg-opacity-80 
                    flex items-center justify-center space-x-4 
                    transition-all duration-300">
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer" 
                      className="text-white hover:scale-125 transition">
                      <Linkedin size={24} />
                    </a>
                    <a href={member.twitter} target="_blank" rel="noopener noreferrer" 
                      className="text-white hover:scale-125 transition">
                      <Twitter size={24} />
                    </a>
                    <a href={member.github} target="_blank" rel="noopener noreferrer" 
                      className="text-white hover:scale-125 transition">
                     
                    </a>
                  </div>
                )}
              </div>
              
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-blue-900 mb-2">{member.name}</h3>
                <p className="text-blue-700 font-medium mb-4">{member.role}</p>
                <p className="text-gray-600 text-sm opacity-0 group-hover:opacity-100 
                  transition-opacity duration-300">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;