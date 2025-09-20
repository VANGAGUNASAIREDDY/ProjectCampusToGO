import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { mockRiders, mockRideHistory, mockAdvertisements } from '../data/mockData';
import AdCard from '../components/Advertisements/AdCard';
import { 
  MapPin, 
  Search, 
  Star, 
  Clock, 
  Phone, 
  Car,
  History,
  Filter
} from 'lucide-react';

const UserDashboard: React.FC = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [pickup, setPickup] = useState('');
  const [destination, setDestination] = useState('');
  const [showRideHistory, setShowRideHistory] = useState(false);
  const [selectedRider, setSelectedRider] = useState(null);

  const cardAds = mockAdvertisements.filter(ad => ad.type === 'card');

  const handleBookRide = (rider) => {
    if (!pickup || !destination) {
      alert('Please enter both pickup and destination locations');
      return;
    }
    
    navigate('/ride-confirmation', {
      state: {
        rider,
        pickup,
        destination,
        otp: Math.floor(1000 + Math.random() * 9000).toString()
      }
    });
  };

  const popularLocations = [
    'Main Campus Gate',
    'Library Block',
    'Engineering Building',
    'Hostel Complex',
    'Sports Center',
    'City Mall',
    'Metro Station',
    'Bus Terminal'
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Header */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 mb-2">
                Welcome back, {user?.name}! 👋
              </h1>
              <p className="text-gray-600">Where would you like to go today?</p>
            </div>
            <div className="mt-4 md:mt-0">
              <button
                onClick={() => setShowRideHistory(!showRideHistory)}
                className="flex items-center space-x-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
              >
                <History className="w-4 h-4" />
                <span>Ride History</span>
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Booking Section */}
          <div className="lg:col-span-2 space-y-6">
            {/* Booking Form */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Book a Ride</h2>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Pickup Location
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-green-500 w-4 h-4" />
                    <input
                      type="text"
                      value={pickup}
                      onChange={(e) => setPickup(e.target.value)}
                      placeholder="Enter pickup location"
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Destination
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-red-500 w-4 h-4" />
                    <input
                      type="text"
                      value={destination}
                      onChange={(e) => setDestination(e.target.value)}
                      placeholder="Where are you going?"
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    />
                  </div>
                </div>

                {/* Popular Locations */}
                <div>
                  <p className="text-sm text-gray-600 mb-3">Popular locations:</p>
                  <div className="flex flex-wrap gap-2">
                    {popularLocations.slice(0, 4).map((location) => (
                      <button
                        key={location}
                        onClick={() => {
                          if (!pickup) setPickup(location);
                          else if (!destination) setDestination(location);
                        }}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-orange-100 hover:text-orange-700 transition-colors"
                      >
                        {location}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Available Riders */}
            {(pickup && destination) && (
              <div className="bg-white rounded-xl shadow-sm p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-semibold text-gray-900">Available Riders</h2>
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Filter className="w-4 h-4" />
                    <span className="text-sm">Sort by: Price</span>
                  </div>
                </div>

                <div className="space-y-4">
                  {mockRiders.map((rider) => (
                    <div key={rider.id} className="border border-gray-200 rounded-lg p-4 hover:border-orange-300 transition-colors">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <img
                            src={rider.profileImage}
                            alt={rider.name}
                            className="w-12 h-12 rounded-full object-cover"
                          />
                          <div>
                            <h3 className="font-semibold text-gray-900">{rider.name}</h3>
                            <div className="flex items-center space-x-4 text-sm text-gray-600">
                              <div className="flex items-center">
                                <Star className="w-4 h-4 text-yellow-400 mr-1" />
                                <span>{rider.rating}</span>
                              </div>
                              <div className="flex items-center">
                                <Car className="w-4 h-4 mr-1" />
                                <span>{rider.vehicleType}</span>
                              </div>
                              <div className="flex items-center">
                                <Clock className="w-4 h-4 mr-1" />
                                <span>{rider.eta} min</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="text-right">
                          <div className="text-2xl font-bold text-gray-900">₹{rider.price}</div>
                          <button
                            onClick={() => handleBookRide(rider)}
                            className="mt-2 bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition-colors text-sm font-medium"
                          >
                            Book Now
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Ride History */}
            {showRideHistory && (
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-6">Ride History</h2>
                
                <div className="space-y-4">
                  {mockRideHistory.map((ride) => (
                    <div key={ride.id} className="border border-gray-200 rounded-lg p-4">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <div className="flex items-center space-x-2 text-sm text-gray-600 mb-1">
                            <MapPin className="w-4 h-4 text-green-500" />
                            <span>{ride.pickupLocation}</span>
                          </div>
                          <div className="flex items-center space-x-2 text-sm text-gray-600">
                            <MapPin className="w-4 h-4 text-red-500" />
                            <span>{ride.dropLocation}</span>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="font-semibold text-gray-900">₹{ride.price}</div>
                          <div className="flex items-center mt-1">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`w-3 h-3 ${
                                  i < ride.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                                }`}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex justify-between items-center text-sm text-gray-600">
                        <span>with {ride.riderName}</span>
                        <span>{ride.date.toLocaleDateString()}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar with Ads */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Stats</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Total Rides</span>
                  <span className="font-semibold">{mockRideHistory.length}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Money Saved</span>
                  <span className="font-semibold text-green-600">₹450</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Average Rating</span>
                  <span className="font-semibold">4.8 ⭐</span>
                </div>
              </div>
            </div>

            {/* Advertisement Cards */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">Special Offers</h3>
              {cardAds.slice(0, 3).map((ad) => (
                <AdCard key={ad.id} ad={ad} />
              ))}
            </div>

            {/* Emergency Contact */}
            <div className="bg-red-50 rounded-xl p-6 border border-red-200">
              <h3 className="text-lg font-semibold text-red-800 mb-3">Emergency</h3>
              <p className="text-red-600 text-sm mb-4">
                In case of emergency during your ride, contact us immediately.
              </p>
              <button className="flex items-center space-x-2 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors w-full justify-center">
                <Phone className="w-4 h-4" />
                <span>Call Emergency: 911</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;