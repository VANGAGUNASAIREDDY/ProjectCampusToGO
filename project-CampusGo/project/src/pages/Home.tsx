import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { mockAdvertisements } from '../data/mockData';
import AdCarousel from '../components/Advertisements/AdCarousel';
import AdCard from '../components/Advertisements/AdCard';
import { 
  MapPin, 
  Clock, 
  Shield, 
  Star, 
  Users, 
  Bike,
  ArrowRight 
} from 'lucide-react';

const Home: React.FC = () => {
  const { isAuthenticated, user } = useAuth();

  const bannerAds = mockAdvertisements.filter(ad => ad.type === 'banner');
  const cardAds = mockAdvertisements.filter(ad => ad.type === 'card').slice(0, 3);

  const getDashboardRoute = () => {
    if (user?.role === 'rider') return '/rider-dashboard';
    return '/user-dashboard';
  };

  const stats = [
    { icon: Users, label: 'Active Riders', value: '500+' },
    { icon: MapPin, label: 'Cities Covered', value: '25+' },
    { icon: Star, label: 'Average Rating', value: '4.8' },
    { icon: Bike, label: 'Rides Completed', value: '10K+' }
  ];

  const features = [
    {
      icon: Clock,
      title: 'Quick Rides',
      description: 'Get a ride in under 5 minutes with our quick booking system'
    },
    {
      icon: Shield,
      title: 'Safe & Secure',
      description: 'All riders are verified with proper documentation and insurance'
    },
    {
      icon: MapPin,
      title: 'Campus Coverage',
      description: 'Complete coverage of your campus and nearby areas'
    },
    {
      icon: Star,
      title: 'Top Rated',
      description: 'Highly rated by students and faculty across all campuses'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-orange-600 to-orange-700 text-white">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Your Campus
              <span className="block text-yellow-300">Ride Partner</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
              Fast, affordable, and safe two-wheeler rides across your campus and city. 
              Join thousands of students who trust CampusGo for their daily commute.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {isAuthenticated ? (
                <Link
                  to={getDashboardRoute()}
                  className="bg-white text-orange-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center justify-center"
                >
                  Go to Dashboard
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              ) : (
                <>
                  <Link
                    to="/signup?role=user"
                    className="bg-white text-orange-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center justify-center"
                  >
                    Book a Ride
                    <MapPin className="ml-2 w-5 h-5" />
                  </Link>
                  <Link
                    to="/signup?role=rider"
                    className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-orange-600 transition-all duration-300 inline-flex items-center justify-center"
                  >
                    Become a Rider
                    <Bike className="ml-2 w-5 h-5" />
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-orange-600" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Advertisement Carousel */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Special Offers & Deals
          </h2>
          <AdCarousel ads={bannerAds} className="max-w-4xl mx-auto" />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose CampusGo?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the best in campus transportation with our innovative features
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="text-center p-6 rounded-lg hover:shadow-lg transition-all duration-300">
                  <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Partner Ads Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Partner Offers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {cardAds.map((ad) => (
              <AdCard key={ad.id} ad={ad} variant="vertical" />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join thousands of satisfied customers who choose CampusGo for their daily rides.
            Safe, fast, and affordable transportation is just a tap away.
          </p>
          
          {!isAuthenticated && (
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/signup"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Sign Up Now
              </Link>
              <Link
                to="/login"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300"
              >
                Login
              </Link>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Home;