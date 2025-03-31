import  { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "John Doe",
    role: "CTO, Tech Innovations",
    review: "Exceptional service and professional approach that exceeded our expectations.",
    image: "/api/placeholder/100/100"
  },
  {
    name: "Jane Smith",
    role: "CEO, Global Enterprises",
    review: "Transformed our digital strategy with cutting-edge solutions that revolutionized our business.",
    image: "/api/placeholder/100/100"
  },
  {
    name: "Michael Chen",
    role: "Founder, Startup Accelerator",
    review: "A game-changing partnership that delivered results beyond our wildest dreams.",
    image: "/api/placeholder/100/100"
  }
];

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const autoSlideTimer = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(autoSlideTimer);
  }, [currentSlide]);

  const nextSlide = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
      setIsAnimating(false);
    }, 300);
  };

  const prevSlide = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
      setIsAnimating(false);
    }, 300);
  };

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-center text-black mb-16 tracking-tight">
          Client <span className="text-gray-500">Testimonials</span>
        </h2>
        
        <div className="relative max-w-3xl mx-auto">
          {/* Carousel Navigation */}
          <button 
            onClick={prevSlide} 
            disabled={isAnimating}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 
              bg-white shadow-lg rounded-full p-3 hover:bg-blue-100 
              transition-all duration-300 ease-in-out 
              disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronLeft className="text-black" />
          </button>
          <button 
            onClick={nextSlide} 
            disabled={isAnimating}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 
              bg-white shadow-lg rounded-full p-3 hover:bg-blue-100 
              transition-all duration-300 ease-in-out 
              disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronRight className="text-black" />
          </button>

          {/* Testimonial Slide */}
          <div className="relative h-96 overflow-hidden">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className={`absolute inset-0 transition-all duration-500 ease-in-out 
                  ${index === currentSlide 
                    ? 'opacity-100 translate-x-0' 
                    : index < currentSlide 
                      ? 'opacity-0 -translate-x-full' 
                      : 'opacity-0 translate-x-full'
                  } 
                  flex flex-col items-center justify-center text-center p-8`}
              >
                <div className="relative">
                  <Quote className="absolute -top-8 -left-8 text-blue-200 opacity-50" size={64} />
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-32 h-32 rounded-full mx-auto mb-6 
                      border-4 border-white shadow-lg 
                      transform transition-transform duration-300 hover:scale-110"
                  />
                  <Quote className="absolute -bottom-8 -right-8 text-blue-200 opacity-50" size={64} />
                </div>
                <p className="text-2xl font-light italic text-gray-800 mb-6 max-w-xl">
                  {testimonial.review}
                </p>
                <div>
                  <h4 className="font-bold text-xl text-black">{testimonial.name}</h4>
                  <p className="text-black font-medium">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center mt-12 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => !isAnimating && setCurrentSlide(index)}
                className={`w-4 h-4 rounded-full transition-all duration-300 
                  ${index === currentSlide 
                    ? 'bg-gray-600 w-8' 
                    : 'bg-gray-300 hover:bg-gray-400'
                  }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;