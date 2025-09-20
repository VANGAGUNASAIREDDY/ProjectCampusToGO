import React from 'react';
import { mockAdvertisements } from '../data/mockData';
import AdBanner from '../components/Advertisements/AdBanner';
import { 
  Users, 
  Shield, 
  MapPin, 
  Award, 
  Phone, 
  Mail,
  Clock,
  Star,
  CheckCircle
} from 'lucide-react';

const About: React.FC = () => {
  const bannerAds = mockAdvertisements.filter(ad => ad.type === 'banner').slice(0, 2);

  const features = [
    {
      icon: Shield,
      title: 'Safe & Secure',
      description: 'All riders are verified with proper documentation, insurance, and background checks for your safety.'
    },
    {
      icon: Clock,
      title: 'Quick & Reliable',
      description: 'Get a ride in under 5 minutes with our network of verified riders across the campus.'
    },
    {
      icon: MapPin,
      title: 'Campus Coverage',
      description: 'Complete coverage of university campuses and surrounding areas with optimal route planning.'
    },
    {
      icon: Star,
      title: 'Top Rated Service',
      description: 'Rated 4.8/5 by thousands of students and faculty members across multiple universities.'
    }
  ];

  const stats = [
    { icon: Users, label: 'Happy Customers', value: '50K+' },
    { icon: MapPin, label: 'Cities Covered', value: '25+' },
    { icon: CheckCircle, label: 'Rides Completed', value: '100K+' },
    { icon: Award, label: 'University Partners', value: '15+' }
  ];

  const team = [
    {
      name: 'Arjun Patel',
      role: 'Founder & CEO',
      image: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      description: 'Former IIT graduate with 10 years of experience in transportation technology.'
    },
    {
      name: 'Priya Sharma',
      role: 'Head of Operations',
      image: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      description: 'Expert in logistics and operations with experience at leading ride-sharing companies.'
    },
    {
      name: 'Rahul Singh',
      role: 'CTO',
      image: 'https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      description: 'Technology leader specializing in mobile app development and real-time systems.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-700 text-white py-24">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About CampusGo</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90 leading-relaxed">
            Connecting students and campus communities through safe, affordable, 
            and reliable two-wheeler transportation solutions.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Our Mission</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              At CampusGo, we believe that every student deserves access to safe, affordable, and convenient 
              transportation. Founded in 2020 by a team of university alumni, we recognized the unique 
              transportation challenges faced by campus communities.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our mission is to transform campus mobility by connecting students with verified local riders, 
              creating a sustainable ecosystem that benefits both passengers and drivers while ensuring 
              safety remains our top priority.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Impact</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                    <Icon className="w-10 h-10 text-blue-600" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Advertisement Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Our Partners & Sponsors
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {bannerAds.map((ad) => (
              <AdBanner key={ad.id} ad={ad} size="medium" />
            ))}
          </div>
          <p className="text-center text-gray-600 mt-8 max-w-2xl mx-auto">
            We partner with leading brands to bring you exclusive offers and discounts. 
            Our partnerships help us keep our services affordable while providing additional value to our community.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Why Choose Us?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We've built our platform with student needs in mind, focusing on safety, affordability, and convenience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">{feature.title}</h3>
                  <p className="text-gray-600 text-center leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our dedicated team works tirelessly to ensure you have the best experience with CampusGo.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full object-cover mx-auto mb-4 border-4 border-gray-200"
                />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 leading-relaxed">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Get In Touch</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Have questions, suggestions, or want to partner with us? We'd love to hear from you.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="bg-white bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Call Us</h3>
              <p className="opacity-90">+91 1800 123 4567</p>
              <p className="text-sm opacity-75 mt-1">24/7 Support</p>
            </div>
            
            <div className="text-center">
              <div className="bg-white bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Email Us</h3>
              <p className="opacity-90">support@campusgo.com</p>
              <p className="text-sm opacity-75 mt-1">Response within 24 hours</p>
            </div>
            
            <div className="text-center">
              <div className="bg-white bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
              <p className="opacity-90">Bangalore, Karnataka</p>
              <p className="text-sm opacity-75 mt-1">India - 560001</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <div className="bg-white bg-opacity-10 rounded-xl p-8 max-w-2xl mx-auto">
              <h3 className="text-xl font-semibold mb-4">Safety First</h3>
              <p className="opacity-90 leading-relaxed">
                Your safety is our top priority. All our riders go through thorough background checks, 
                and our platform includes real-time tracking, emergency contacts, and 24/7 support. 
                Report any issues immediately through our app or emergency helpline.
              </p>
              <div className="mt-6">
                <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                  Emergency: 911
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;