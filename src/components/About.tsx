import React from 'react';
import { Camera, Award, Heart, Users, Star, Play } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">D.N Photography</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are passionate storytellers dedicated to capturing the essence of your most precious moments through the art of photography and videography.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Story</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Founded with a vision to preserve life's most beautiful moments, PixelStudio has grown from a small photography service to a comprehensive visual storytelling studio. We believe every moment has a story worth telling, and every story deserves to be captured with artistry and emotion.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our team of skilled photographers and videographers brings years of experience and a keen eye for detail to every project, ensuring that your memories are preserved in the most beautiful way possible.
              </p>
            </div>

            {/* Features */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex items-start space-x-4">
                <div className="bg-purple-100 p-3 rounded-lg">
                  <Camera className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Professional Equipment</h4>
                  <p className="text-gray-600 text-sm">State-of-the-art cameras and equipment for stunning results.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-pink-100 p-3 rounded-lg">
                  <Award className="h-6 w-6 text-pink-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Award Winning</h4>
                  <p className="text-gray-600 text-sm">Recognized excellence in photography and videography.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-yellow-100 p-3 rounded-lg">
                  <Heart className="h-6 w-6 text-yellow-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Passionate Team</h4>
                  <p className="text-gray-600 text-sm">Dedicated artists who love what they do.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Personal Approach</h4>
                  <p className="text-gray-600 text-sm">Tailored services for each unique story.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img 
                src="https://images.pexels.com/photos/1264210/pexels-photo-1264210.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Professional photographer at work"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h4 className="text-xl font-bold mb-2">Professional Excellence</h4>
                <p className="text-gray-200">Capturing moments with artistic vision</p>
              </div>
            </div>

            {/* Floating Cards */}
            <div className="absolute -top-4 -right-4 lg:-top-6 lg:-right-6 bg-white p-4 rounded-xl shadow-lg border border-gray-100 z-10">
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600 mb-1">5+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
            </div>

            <div className="absolute -bottom-4 -left-4 lg:-bottom-6 lg:-left-6 bg-white p-4 rounded-xl shadow-lg border border-gray-100 z-10">
              <div className="text-center">
                <div className="text-2xl font-bold text-pink-600 mb-1">100%</div>
                <div className="text-sm text-gray-600">Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;