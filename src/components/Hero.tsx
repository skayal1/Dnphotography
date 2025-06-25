import React from 'react';
import { Play, Camera, ArrowRight, Award, PhoneCall } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-pink-900 to-indigo-900">
        <div className="absolute inset-0 bg-black/40"></div>
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: 'url("https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=1200")',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        ></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 opacity-30">
        <div className="w-4 h-4 bg-pink-400 rounded-full animate-pulse"></div>
      </div>
      <div className="absolute top-40 right-16 opacity-30">
        <div className="w-6 h-6 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
      </div>
      <div className="absolute bottom-32 left-16 opacity-30">
        <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto pt-16 md:pt-0 pt-[70px]">
        <div className="space-y-6 md:space-y-8">
          {/* Main Heading */}
          <div className="space-y-3 md:space-y-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
                D.N Photography
              </span>
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light text-gray-200">
              Capturing Life's Beautiful Moments
            </p>
          </div>

          {/* Badge */}
          <div className="inline-flex items-center space-x-2 md:space-x-3 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 md:px-6 md:py-3 border border-white/20">
            <Camera className="h-4 w-4 md:h-5 md:w-5 text-pink-400" />
            <span className="text-white font-medium text-sm md:text-base">Professional Photography</span>
            <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-white/50 rounded-full"></div>
            <Play className="h-4 w-4 md:h-5 md:w-5 text-purple-400" />
            <span className="text-white font-medium text-sm md:text-base">Cinematic Videography</span>
          </div>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed px-4">
            Professional photography and videography services for weddings, events, portraits, and special celebrations
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 md:space-x-6 px-4">
            <button 
              onClick={() => scrollToSection('gallery')}
              className="group bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 md:px-8 md:py-4 rounded-full font-semibold text-base md:text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center space-x-2 w-full sm:w-auto justify-center"
            >
              <span>View Our Work</span>
              <ArrowRight className="h-4 w-4 md:h-5 md:w-5 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
            
            <a href='tel:99338830490'>
              <button className="group bg-white/10 backdrop-blur-sm text-white px-6 py-3 md:px-8 md:py-4 rounded-full font-semibold text-base md:text-lg border border-white/20 hover:bg-white/20 transform hover:scale-105 transition-all duration-300 flex items-center space-x-2 w-full sm:w-auto justify-center"
            >
              <PhoneCall className="h-4 w-4 md:h-5 md:w-5 group-hover:scale-110 transition-transform duration-200" />
              <span>Call Us For Booking</span>
            </button></a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 pt-6 md:pt-8 px-4">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-white mb-1 md:mb-2">250+</div>
              <div className="text-gray-300 text-sm md:text-base">Weddings Captured</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-white mb-1 md:mb-2">1000+</div>
              <div className="text-gray-300 text-sm md:text-base">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-white mb-1 md:mb-2">12+</div>
              <div className="text-gray-300 text-sm md:text-base">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-white mb-1 md:mb-2">5★</div>
              <div className="text-gray-300 text-sm md:text-base">Client Rating</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
