import React from 'react';
import { Camera, Video, Heart, Users, Star, Award, Clock, Palette, MessageCircle } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Wedding Photography",
      description: "Capture your special day with stunning, professional wedding photography that tells your unique love story",
      features: ["Pre-wedding Shoots", "Ceremony Coverage", "Reception Photos", "Digital Gallery", "Print Package"],
      color: "from-pink-500 to-rose-500"
    },
    {
      icon: <Video className="h-8 w-8" />,
      title: "Wedding Videography",
      description: "Cinematic wedding films that preserve the emotions and memories of your perfect day",
      features: ["4K Recording", "Drone Footage", "Same-day Highlights", "Full Feature Film", "Raw Footage"],
      color: "from-purple-500 to-indigo-500"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Event Photography",
      description: "Professional coverage for corporate events, parties, and special celebrations",
      features: ["Corporate Events", "Birthday Parties", "Anniversaries", "Cultural Events", "Live Coverage"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Camera className="h-8 w-8" />,
      title: "Portrait Sessions",
      description: "Beautiful portrait photography for individuals, families, and professional headshots",
      features: ["Family Portraits", "Individual Sessions", "Professional Headshots", "Maternity Photos", "Studio & Outdoor"],
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: "Commercial Photography",
      description: "High-quality commercial photography for businesses, products, and marketing materials",
      features: ["Product Photography", "Brand Photography", "Marketing Materials", "Social Media Content", "Commercial Rights"],
      color: "from-orange-500 to-red-500"
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Special Occasions",
      description: "Comprehensive coverage for rice ceremonies, graduations, and milestone celebrations",
      features: ["Rice Ceremonies", "Graduations", "Religious Events", "Milestone Birthdays", "Cultural Celebrations"],
      color: "from-yellow-500 to-amber-500"
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From intimate portraits to grand celebrations, we offer comprehensive photography and videography services tailored to your unique needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group bg-gray-50 rounded-2xl p-8 hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-100">
              <div className={`bg-gradient-to-r ${service.color} w-16 h-16 rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {service.icon}
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h4>
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center space-x-2 text-sm text-gray-600">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Process</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">Simple steps to capture your perfect moments</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">1</div>
              <h4 className="font-semibold text-gray-900 mb-2">Consultation</h4>
              <p className="text-gray-600 text-sm">Discuss your vision and requirements</p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-r from-blue-500 to-cyan-500 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">2</div>
              <h4 className="font-semibold text-gray-900 mb-2">Planning</h4>
              <p className="text-gray-600 text-sm">Create a detailed timeline and shot list</p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">3</div>
              <h4 className="font-semibold text-gray-900 mb-2">Capture</h4>
              <p className="text-gray-600 text-sm">Professional photography and videography</p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-r from-orange-500 to-red-500 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">4</div>
              <h4 className="font-semibold text-gray-900 mb-2">Delivery</h4>
              <p className="text-gray-600 text-sm">Edited photos and videos delivered</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Capture Your Story?</h3>
            <p className="text-purple-100 mb-6 max-w-2xl mx-auto">
              Let's discuss your vision and create something beautiful together. Contact us today for a personalized consultation.
            </p>
            <div className="flex justify-center">
              <a href="whatsapp://send?phone=9933883049&text=Hi%20there!%20I%20have%20some%20query">
              <button 
                onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-200 flex items-center gap-2"
              >
                <span>Let's Talk on WhatsApp</span>
                <MessageCircle className="h-5 w-5 text-green-500" />
              </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;