import { useState, useEffect } from 'react';
import { Linkedin, Twitter, ArrowUpRight } from 'lucide-react';

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
  const [expandedMember, setExpandedMember] = useState(null);
  const [rotation, setRotation] = useState(0);
  
  useEffect(() => {
    if (expandedMember !== null) return;
    
    const rotationInterval = setInterval(() => {
      setRotation(prev => (prev + 1) % 360);
    }, 100);
    
    return () => clearInterval(rotationInterval);
  }, [expandedMember]);
  
  return (
    <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-30">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-16">
        {/* Left Side - Rotating Team Section */}
        <div className="relative w-full md:w-1/2 flex justify-center">
          <div className="relative max-w-md mx-auto">
            <div className={`relative transition-all duration-500 ease-in-out mx-auto h-96`} style={{ width: expandedMember !== null ? '100%' : '300px' }}>
              {teamMembers.map((member, index) => {
                const isExpanded = expandedMember === index;
                let orbitStyles = {};
                if (expandedMember === null) {
                  const angle = ((index * 90) + rotation) % 360;
                  const radius = 140;
                  const radians = angle * (Math.PI / 180);
                  const x = Math.sin(radians) * radius;
                  const y = -Math.cos(radians) * radius;
                  orbitStyles = { 
                    transform: `translate(${x}px, ${y}px) rotate(${-rotation}deg)`,
                    transition: 'transform 0.1s linear'
                  };
                }
                return (
                  <div 
                    key={index}
                    className={`absolute z-10 transition-all duration-500 ease-in-out
                      ${isExpanded ? 'w-full h-full left-0 top-0' : 'w-32 h-32 md:w-40 md:h-40 left-1/2 top-1/2 -ml-16 -mt-16 md:-ml-20 md:-mt-20'}`}
                    style={isExpanded ? {} : orbitStyles}
                  >
                    <div 
                      className={`${isExpanded 
                        ? 'absolute inset-0 bg-white rounded-xl shadow-2xl overflow-hidden' 
                        : 'relative h-full w-full rounded-full bg-white shadow-lg overflow-hidden cursor-pointer transform transition-transform hover:scale-110'}`}
                      onClick={() => setExpandedMember(isExpanded ? null : index)}
                    >
                      {isExpanded ? (
                        <div className="flex flex-col md:flex-row h-full">
                          <div className="w-full md:w-2/5 relative overflow-hidden">
                            <img src={member.image} alt={member.name} className="h-48 md:h-full w-full object-cover" />
                            <button className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md hover:bg-blue-100 transition-colors" onClick={(e) => { e.stopPropagation(); setExpandedMember(null); }}>
                              <ArrowUpRight size={20} className="text-blue-900" />
                            </button>
                          </div>
                          <div className="p-6 flex flex-col justify-between w-full md:w-3/5">
                            <div>
                              <h3 className="text-2xl font-bold text-blue-900">{member.name}</h3>
                              <p className="text-blue-600 font-medium mt-1 mb-4">{member.role}</p>
                              <p className="text-gray-700">{member.bio}</p>
                            </div>
                            <div className="flex mt-4 space-x-3">
                              <a href={member.linkedin} className="text-blue-600 hover:text-blue-800 transition-colors"><Linkedin size={22} /></a>
                              <a href={member.twitter} className="text-blue-500 hover:text-blue-700 transition-colors"><Twitter size={22} /></a>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <>
                          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-900 opacity-70"></div>
                          <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                          <div className="absolute bottom-0 inset-x-0 text-center p-2 text-white">
                            <p className="font-medium text-sm truncate">{member.name}</p>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Side - Text Section */}
        <div className="w-full md:w-1/2">
        
   <h2 className="text-4xl font-extrabold text-center text-blue-900 mb-16">
   Our<span className="text-blue-600">  Leadership Team</span>
        </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Our leaders bring experience and expertise from various industries to drive innovation and strategic growth.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            With a shared commitment to excellence, they ensure our mission is achieved with integrity and forward-thinking vision.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
