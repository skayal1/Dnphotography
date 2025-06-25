import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Play, Heart, Users, Camera, PhoneCall } from 'lucide-react';

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const categories = [
    { id: 'all', name: 'All Work', icon: <Camera className="h-4 w-4" /> },
    { id: 'weddings', name: 'Weddings', icon: <Heart className="h-4 w-4" /> },
    { id: 'ceremonies', name: 'Ceremonies', icon: <Users className="h-4 w-4" /> },
    { id: 'events', name: 'Events', icon: <Play className="h-4 w-4" /> }
  ];

  const portfolioItems = [
    {
      id: 1,
      category: 'weddings',
      title: 'Romantic Beach Wedding',
      image: 'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Beautiful seaside ceremony with golden hour photography'
    },
    {
      id: 2,
      category: 'ceremonies',
      title: 'Traditional Rice Ceremony',
      image: 'https://images.pexels.com/photos/8434791/pexels-photo-8434791.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Cultural celebration with family and traditions'
    },
    {
      id: 3,
      category: 'weddings',
      title: 'Garden Wedding Celebration',
      image: 'https://images.pexels.com/photos/1779353/pexels-photo-1779353.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Elegant outdoor wedding with natural lighting'
    },
    {
      id: 4,
      category: 'events',
      title: 'Corporate Event Coverage',
      image: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Professional business event documentation'
    },
    {
      id: 5,
      category: 'ceremonies',
      title: 'Birthday Celebration',
      image: 'https://images.pexels.com/photos/1857157/pexels-photo-1857157.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Joyful family celebration moments captured'
    },
    {
      id: 6,
      category: 'weddings',
      title: 'Intimate Church Wedding',
      image: 'https://images.pexels.com/photos/1024960/pexels-photo-1024960.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Sacred ceremony with emotional moments'
    }
  ];

  const filteredItems = activeCategory === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % filteredItems.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
  };

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Portfolio</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Explore our collection of captured moments, from intimate ceremonies to grand celebrations
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => {
                  setActiveCategory(category.id);
                  setCurrentImageIndex(0);
                }}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {category.icon}
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Featured Image */}
        {filteredItems.length > 0 && (
          <div className="mb-12">
            <div className="relative max-w-4xl mx-auto">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl group">
                <img 
                  src={filteredItems[currentImageIndex].image}
                  alt={filteredItems[currentImageIndex].title}
                  className="w-full h-96 md:h-[500px] object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                
                {/* Navigation Arrows */}
                <button 
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm p-3 rounded-full text-white hover:bg-white/30 transition-all duration-200"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                <button 
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm p-3 rounded-full text-white hover:bg-white/30 transition-all duration-200"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>

                {/* Image Info */}
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">{filteredItems[currentImageIndex].title}</h3>
                  <p className="text-gray-200">{filteredItems[currentImageIndex].description}</p>
                </div>
              </div>

              {/* Image Counter */}
              <div className="text-center mt-4">
                <span className="text-gray-600">
                  {currentImageIndex + 1} of {filteredItems.length}
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Thumbnail Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {filteredItems.map((item, index) => (
            <button
              key={item.id}
              onClick={() => setCurrentImageIndex(index)}
              className={`relative overflow-hidden rounded-lg group ${
                index === currentImageIndex ? 'ring-4 ring-blue-500' : ''
              }`}
            >
              <img 
                src={item.image}
                alt={item.title}
                className="w-full h-24 object-cover transition-transform duration-200 group-hover:scale-110"
              />
              <div className={`absolute inset-0 bg-blue-600/20 transition-opacity duration-200 ${
                index === currentImageIndex ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
              }`}></div>
            </button>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Love What You See?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Let us capture your special moments with the same attention to detail and artistic vision showcased in our portfolio.
            </p>
            <a 
              href="tel:9933883049"
              className="inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200 gap-2"
            >
              <PhoneCall className="h-5 w-5 text-green-300" />
              <span>Book Your Session</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;