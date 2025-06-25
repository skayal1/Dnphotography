import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Play, Heart, Users, Camera, X, Video, PhoneCall } from 'lucide-react';

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedMedia, setSelectedMedia] = useState<any>(null);

  const categories = [
    { id: 'all', name: 'All Work', icon: <Camera className="h-4 w-4" /> },
    { id: 'weddings', name: 'Weddings', icon: <Heart className="h-4 w-4" /> },
    { id: 'portraits', name: 'Portraits', icon: <Users className="h-4 w-4" /> },
    { id: 'events', name: 'Events', icon: <Play className="h-4 w-4" /> },
    { id: 'videos', name: 'Videos', icon: <Video className="h-4 w-4" /> }
  ];

  const galleryItems = [
    {
      id: 1,
      category: 'weddings',
      type: 'image',
      title: 'Professional Headshots',
      image: 'https://raw.githubusercontent.com/skayal1/Dnphotography/a5d7685b9feaab5428b788d1bdd0e459767aaee1/13.jpg',
      description: 'Beautiful wedding ceremony with golden hour photography'
    },
    {
      id: 2,
      category: 'portraits',
      type: 'image',
      title: 'Family Portrait Session',
      image: 'https://upload.wikimedia.org/wikipedia/commons/7/73/Bengali_Hindu_wedding_DSCN1106_08.jpg',
      description: 'Warm family moments captured in natural light'
    },
    {
      id: 3,
      category: 'weddings',
      type: 'image',
      title: 'Wedding Celebration',
      image: 'https://www.ritabrata.com/wp-content/uploads/2024/05/PANA3693.jpg',
      description: 'Elegant outdoor wedding with natural lighting'
    },
    {
      id: 4,
      category: 'events',
      type: 'image',
      title: 'Corporate Event Coverage',
      image: 'https://raw.githubusercontent.com/skayal1/Dnphotography/refs/heads/main/61.png',
      description: 'Professional business event documentation'
    },
    {
      id: 5,
      category: 'portraits',
      type: 'image',
      title: 'Professional Headshots',
      image: 'https://shaadiwish.com/blog/wp-content/uploads/2020/03/bengali-wedding-ideas-e1584958386314.jpg',
      description: 'Corporate headshots with professional lighting'
    },
    {
      id: 6,
      category: 'events',
      type: 'image',
      title: 'Cute Baby Ceremony',
      image: 'https://raw.githubusercontent.com/skayal1/Dnphotography/refs/heads/main/DSC_9140.jpg',
      description: 'Sacred ceremony with emotional moments'
    },
    {
      id: 7,
      category: 'videos',
      type: 'video',
      title: 'Wedding Highlight',
      image: 'https://raw.githubusercontent.com/skayal1/Dnphotography/refs/heads/main/DSC_7282.jpg',
      description: 'Cinematic wedding highlight video'
    },
    {
      id: 8,
      category: 'weddings',
      type: 'image',
      title: 'Wedding Highlight',
      image: 'https://raw.githubusercontent.com/skayal1/Dnphotography/refs/heads/main/102.png',
      description: 'Joyful celebration moments captured'
    },
    {
      id: 9,
      category: 'portraits',
      type: 'image',
      title: 'Maternity Session',
      image: 'https://www.chocovira.in/wp-content/uploads/2020/08/Baby-Shower-Ceremony-Outfit-In-India.jpg',
      description: 'Beautiful expecting mother portrait'
    },
    {
      id: 10,
      category: 'videos',
      type: 'video',
      title: 'Event Documentary',
      image: 'https://raw.githubusercontent.com/skayal1/Dnphotography/refs/heads/main/118.png',
      description: 'Professional event videography'
    },
    {
      id: 11,
      category: 'weddings',
      type: 'image',
      title: 'Reception Moments',
      image: 'https://raw.githubusercontent.com/skayal1/Dnphotography/refs/heads/main/63.png',
      description: 'Candid reception photography'
    },
    {
      id: 12,
      category: 'portraits',
      type: 'image',
      title: 'Children Portrait',
      image: 'https://newcomers.in/wp-content/uploads/Baby-Annaprashan-ceremony-rituals.jpeg',
      description: 'Playful children photography session'
    }
  ];

  const filteredItems = activeCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  const openLightbox = (item: any) => {
    setSelectedMedia(item);
  };

  const closeLightbox = () => {
    setSelectedMedia(null);
  };

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Gallery</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Explore our collection of captured moments, from intimate ceremonies to grand celebrations
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {category.icon}
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
              onClick={() => openLightbox(item)}
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              <div className="aspect-square overflow-hidden">
                <img 
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                  <p className="text-gray-200 text-sm">{item.description}</p>
                </div>
                
                {/* Play button for videos */}
                {item.type === 'video' && (
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="bg-white/20 backdrop-blur-sm p-4 rounded-full">
                      <Play className="h-8 w-8 text-white fill-current" />
                    </div>
                  </div>
                )}
              </div>

              {/* Type indicator */}
              <div className="absolute top-4 right-4">
                <div className="bg-black/50 backdrop-blur-sm p-2 rounded-full">
                  {item.type === 'video' ? (
                    <Video className="h-4 w-4 text-white" />
                  ) : (
                    <Camera className="h-4 w-4 text-white" />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedMedia && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl max-h-full">
              <button
                onClick={closeLightbox}
                className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors duration-200"
              >
                <X className="h-8 w-8" />
              </button>
              
              <div className="bg-white rounded-lg overflow-hidden">
                <img 
                  src={selectedMedia.image}
                  alt={selectedMedia.title}
                  className="w-full h-auto max-h-[70vh] object-contain"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{selectedMedia.title}</h3>
                  <p className="text-gray-600">{selectedMedia.description}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Love What You See?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Let us capture your special moments with the same attention to detail and artistic vision showcased in our gallery.
            </p>
            <a 
              href="tel:9933883049"
              className="inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200 gap-2"
            >
              <PhoneCall className="h-5 w-5 text-green-300" />
              <span>Book Your Sopt</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;