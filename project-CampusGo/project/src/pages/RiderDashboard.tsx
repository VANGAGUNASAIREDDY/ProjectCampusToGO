import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { mockRideRequests, mockAdvertisements } from '../data/mockData';
import AdCard from '../components/Advertisements/AdCard';
import { 
  MapPin, 
  CheckCircle, 
  XCircle, 
  DollarSign, 
  Star,
  Clock,
  Phone,
  Navigation,
  TrendingUp,
  Award
} from 'lucide-react';

const RiderDashboard: React.FC = () => {
  const { user } = useAuth();
  const [rideRequests, setRideRequests] = useState(mockRideRequests);
  const [isOnline, setIsOnline] = useState(true);

  const cardAds = mockAdvertisements.filter(ad => ad.category === 'gear' || ad.category === 'fuel');

  const handleAcceptRide = (requestId: string) => {
    setRideRequests(requests =>
      requests.map(request =>
        request.id === requestId
          ? { ...request, status: 'accepted' as const }
          : request
      )
    );
  };

  const handleRejectRide = (requestId: string) => {
    setRideRequests(requests =>
      requests.filter(request => request.id !== requestId)
    );
  };

  const stats = {
    totalRides: 342,
    todayEarnings: 850,
    weeklyEarnings: 4200,
    rating: 4.8,
    completionRate: 96
  };

  const getTimeSince = (timestamp: Date) => {
    const now = new Date();
    const diff = Math.floor((now.getTime() - timestamp.getTime()) / (1000 * 60));
    if (diff < 1) return 'Just now';
    if (diff < 60) return `${diff}m ago`;
    const hours = Math.floor(diff / 60);
    if (hours < 24) return `${hours}h ago`;
    return `${Math.floor(hours / 24)}d ago`;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Header */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl shadow-sm p-6 mb-8 text-white">
          <div className="flex flex-col md:flex-row md:items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold mb-2">
                Welcome back, {user?.name}! 🏍️
              </h1>
              <p className="opacity-90">Ready to take some rides today?</p>
            </div>
            <div className="mt-4 md:mt-0 flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className={`w-3 h-3 rounded-full ${isOnline ? 'bg-green-400' : 'bg-red-400'}`}></div>
                <span className="font-medium">{isOnline ? 'Online' : 'Offline'}</span>
              </div>
              <button
                onClick={() => setIsOnline(!isOnline)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  isOnline 
                    ? 'bg-red-500 hover:bg-red-600 text-white' 
                    : 'bg-green-500 hover:bg-green-600 text-white'
                }`}
              >
                {isOnline ? 'Go Offline' : 'Go Online'}
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl shadow-sm p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-600 text-sm">Today's Earnings</p>
                    <p className="text-2xl font-bold text-gray-900">₹{stats.todayEarnings}</p>
                  </div>
                  <div className="bg-green-100 p-3 rounded-lg">
                    <DollarSign className="w-6 h-6 text-green-600" />
                  </div>
                </div>
                <div className="mt-4 flex items-center text-sm text-green-600">
                  <TrendingUp className="w-4 h-4 mr-1" />
                  <span>+12% from yesterday</span>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-sm p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-600 text-sm">Total Rides</p>
                    <p className="text-2xl font-bold text-gray-900">{stats.totalRides}</p>
                  </div>
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Navigation className="w-6 h-6 text-blue-600" />
                  </div>
                </div>
                <div className="mt-4 flex items-center text-sm text-gray-600">
                  <span>Completion rate: {stats.completionRate}%</span>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-sm p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-600 text-sm">Rating</p>
                    <p className="text-2xl font-bold text-gray-900">{stats.rating}</p>
                  </div>
                  <div className="bg-yellow-100 p-3 rounded-lg">
                    <Star className="w-6 h-6 text-yellow-600" />
                  </div>
                </div>
                <div className="mt-4 flex items-center text-sm text-yellow-600">
                  <Award className="w-4 h-4 mr-1" />
                  <span>Top 10% riders</span>
                </div>
              </div>
            </div>

            {/* Ride Requests */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-900">
                  Ride Requests {isOnline && `(${rideRequests.filter(r => r.status === 'pending').length})`}
                </h2>
                {!isOnline && (
                  <p className="text-gray-500 text-sm">Go online to receive ride requests</p>
                )}
              </div>

              {isOnline ? (
                <div className="space-y-4">
                  {rideRequests.filter(request => request.status === 'pending').length > 0 ? (
                    rideRequests
                      .filter(request => request.status === 'pending')
                      .map((request) => (
                        <div key={request.id} className="border border-gray-200 rounded-lg p-4 hover:border-blue-300 transition-colors">
                          <div className="flex justify-between items-start mb-4">
                            <div className="flex-1">
                              <div className="flex items-center space-x-2 mb-3">
                                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                                  <span className="text-blue-600 font-semibold text-sm">
                                    {request.userName.charAt(0)}
                                  </span>
                                </div>
                                <div>
                                  <h3 className="font-semibold text-gray-900">{request.userName}</h3>
                                  <p className="text-xs text-gray-500">{getTimeSince(request.timestamp)}</p>
                                </div>
                              </div>
                              
                              <div className="space-y-2">
                                <div className="flex items-center space-x-2 text-sm">
                                  <MapPin className="w-4 h-4 text-green-500" />
                                  <span className="text-gray-700">From: {request.pickupLocation}</span>
                                </div>
                                <div className="flex items-center space-x-2 text-sm">
                                  <MapPin className="w-4 h-4 text-red-500" />
                                  <span className="text-gray-700">To: {request.dropLocation}</span>
                                </div>
                                <div className="flex items-center space-x-4 text-sm text-gray-600">
                                  <span>Distance: {request.distance}</span>
                                  <span>•</span>
                                  <div className="flex items-center">
                                    <Phone className="w-4 h-4 mr-1" />
                                    <span>{request.userPhone}</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            
                            <div className="text-right ml-4">
                              <div className="text-xl font-bold text-gray-900 mb-3">₹{request.price}</div>
                              <div className="flex space-x-2">
                                <button
                                  onClick={() => handleRejectRide(request.id)}
                                  className="flex items-center px-3 py-2 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition-colors text-sm"
                                >
                                  <XCircle className="w-4 h-4 mr-1" />
                                  Reject
                                </button>
                                <button
                                  onClick={() => handleAcceptRide(request.id)}
                                  className="flex items-center px-3 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm"
                                >
                                  <CheckCircle className="w-4 h-4 mr-1" />
                                  Accept
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))
                  ) : (
                    <div className="text-center py-8">
                      <Clock className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                      <h3 className="text-lg font-medium text-gray-900 mb-2">No ride requests</h3>
                      <p className="text-gray-600">Stay online to receive new ride requests from passengers.</p>
                    </div>
                  )}
                </div>
              ) : (
                <div className="text-center py-8">
                  <div className="w-12 h-12 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-gray-400">😴</span>
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">You're offline</h3>
                  <p className="text-gray-600 mb-4">Go online to start receiving ride requests</p>
                  <button
                    onClick={() => setIsOnline(true)}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Go Online
                  </button>
                </div>
              )}
            </div>

            {/* Active Rides */}
            {rideRequests.filter(r => r.status === 'accepted').length > 0 && (
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-6">Active Rides</h2>
                <div className="space-y-4">
                  {rideRequests
                    .filter(request => request.status === 'accepted')
                    .map((request) => (
                      <div key={request.id} className="border border-green-200 rounded-lg p-4 bg-green-50">
                        <div className="flex justify-between items-center">
                          <div>
                            <h3 className="font-semibold text-gray-900">{request.userName}</h3>
                            <p className="text-sm text-gray-600">{request.pickupLocation} → {request.dropLocation}</p>
                            <p className="text-sm text-green-700 font-medium mt-1">In Progress - ₹{request.price}</p>
                          </div>
                          <div className="flex space-x-2">
                            <button className="flex items-center px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm">
                              <Phone className="w-4 h-4 mr-1" />
                              Call
                            </button>
                            <button className="px-3 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm">
                              Complete
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Weekly Earnings */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Weekly Summary</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Total Earnings</span>
                  <span className="font-semibold text-green-600">₹{stats.weeklyEarnings}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Rides Completed</span>
                  <span className="font-semibold">47</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Online Hours</span>
                  <span className="font-semibold">35h</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Avg. per ride</span>
                  <span className="font-semibold">₹89</span>
                </div>
              </div>
            </div>

            {/* Rider Ads */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">For Riders</h3>
              {cardAds.slice(0, 3).map((ad) => (
                <AdCard key={ad.id} ad={ad} />
              ))}
            </div>

            {/* Safety Tips */}
            <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
              <h3 className="text-lg font-semibold text-blue-800 mb-3">Safety First</h3>
              <ul className="text-blue-600 text-sm space-y-2">
                <li>• Always wear a helmet</li>
                <li>• Verify passenger before pickup</li>
                <li>• Keep emergency contacts handy</li>
                <li>• Report any suspicious activity</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RiderDashboard;