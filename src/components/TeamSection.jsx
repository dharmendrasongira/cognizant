const TeamSection = () => {
  return (
    <section className="bg-white py-30">
      <div className="container mx-auto px-4 flex flex-col items-center">
        {/* Heading */}
        <h2 className="text-4xl font-extrabold text-center text-black mb-6">
          Our <span className="text-gray-500">Leadership Team</span>
        </h2>
        
        {/* Description */}
        <p className="text-gray-700 text-lg leading-relaxed mb-4 text-center">
          Our leaders bring experience and expertise from various industries to drive innovation and strategic growth.
        </p>
        <p className="text-gray-700 text-lg leading-relaxed text-center">
          With a shared commitment to excellence, they ensure our mission is achieved with integrity and forward-thinking vision.
        </p>
      </div>
    </section>
  );
};

export default TeamSection;
