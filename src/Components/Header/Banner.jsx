import React, { useState, useEffect } from 'react';

function Banner() {
  const images = [
    "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&h=600",
    "https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&w=1200&h=600",
    "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=1200&h=600",
    "https://images.unsplash.com/photo-1499028344343-cd173ffc68a9?auto=format&fit=crop&w=1200&h=600"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="mt-10 relative w-full max-w-7xl mx-auto   h-[600px] overflow-hidden rounded-2xl shadow-2xl">
      {/* Slides Container */}
      <div
        className="flex transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="relative w-full h-[600px] flex-shrink-0"
          >
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/10 z-10"></div>

            {/* Background Image */}
            <div
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${image})` }}
            ></div>

            {/* Content */}
            <div className="absolute inset-0 z-20 flex flex-col justify-center items-start text-white p-16 max-w-2xl">
              <h1 className="text-5xl font-bold mb-4 animate-fadeIn">
                Premium Dining Experience
              </h1>
              <p className="text-xl mb-6 animate-fadeIn animate-delay-200">
                Discover culinary excellence in an atmosphere of elegance
              </p>
              <button className="btn btn-primary btn-lg animate-fadeIn animate-delay-500">
                Reserve Now
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex space-x-3">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-4 h-4 rounded-full transition-all duration-300 ${
              currentIndex === index
                ? 'bg-primary ring-2 ring-offset-2 ring-white scale-125'
                : 'bg-white/50 hover:bg-white'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Next/Prev Buttons */}
      <button
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 btn btn-circle btn-ghost text-white hover:bg-white/20 backdrop-blur-sm"
        onClick={() => setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))}
      >
        ❮
      </button>
      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 btn btn-circle btn-ghost text-white hover:bg-white/20 backdrop-blur-sm"
        onClick={() => setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))}
      >
        ❯
      </button>
    </div>
  );
}

export default Banner;