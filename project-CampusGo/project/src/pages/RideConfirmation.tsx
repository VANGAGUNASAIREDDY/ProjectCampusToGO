import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { 
  MapPin, 
  User, 
  Phone, 
  Star, 
  Clock, 
  Car,
  Copy,
  Check
} from 'lucide-react';

const RideConfirmation: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { rider, pickup, destination, otp } = location.state || {};

  const [otpCopied, setOtpCopied] = React.useState(false);

  if (!rider) {
    navigate('/user-dashboard');
    return null;
  }

  const copyOtp = () => {
    navigator.clipboard.writeText(otp);
    setOtpCopied(true);
    setTimeout(() => setOtpCopied(false), 2000);
  };

  const estimatedArrival = new Date(Date.now() + rider.eta * 60 * 1000);
  const estimatedTime = estimatedArrival.toLocaleTimeString('en-US', { 
    hour: '2-digit', 
    minute: '2-digit' 
  });

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Check className="w-8 h-8 text-green-600" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Ride Confirmed!</h1>
          <p className="text-gray-600">Your rider is on the way</p>
        </div>

        {/* Ride Details Card */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-6">
          {/* Rider Info */}
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <img
                  src={rider.profileImage}
                  alt={rider.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-gray-200"
                />
                <div>
                  <h2 className="text-xl font-semibold text-gray-900">{rider.name}</h2>
                  <div className="flex items-center space-x-4 text-sm text-gray-600 mt-1">
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 mr-1" />
                      <span>{rider.rating}</span>
                    </div>
                    <div className="flex items-center">
                      <Car className="w-4 h-4 mr-1" />
                      <span>{rider.vehicleType}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="text-right">
                <div className="text-2xl font-bold text-gray-900">₹{rider.price}</div>
                <div className="text-sm text-gray-600">{rider.vehicleNumber}</div>
              </div>
            </div>
            
            {/* Contact Button */}
            <div className="mt-4">
              <a
                href={`tel:${rider.phone}`}
                className="flex items-center justify-center w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                <Phone className="w-4 h-4 mr-2" />
                Call Rider
              </a>
            </div>
          </div>

          {/* Trip Details */}
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Trip Details</h3>
            
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-green-500 mt-0.5" />
                <div>
                  <p className="font-medium text-gray-900">Pickup</p>
                  <p className="text-gray-600">{pickup}</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-red-500 mt-0.5" />
                <div>
                  <p className="font-medium text-gray-900">Destination</p>
                  <p className="text-gray-600">{destination}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Timing and OTP */}
          <div className="p-6">
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Clock className="w-6 h-6 text-orange-600" />
                </div>
                <p className="text-sm text-gray-600">Arriving in</p>
                <p className="text-xl font-bold text-gray-900">{rider.eta} min</p>
                <p className="text-sm text-gray-500">around {estimatedTime}</p>
              </div>
              
              <div className="text-center">
                <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                  <User className="w-6 h-6 text-purple-600" />
                </div>
                <p className="text-sm text-gray-600">Your OTP</p>
                <div className="flex items-center justify-center space-x-2 mt-1">
                  <span className="text-2xl font-bold text-gray-900 font-mono tracking-wider">
                    {otp}
                  </span>
                  <button
                    onClick={copyOtp}
                    className="p-1 text-gray-500 hover:text-gray-700 transition-colors"
                    title="Copy OTP"
                  >
                    {otpCopied ? (
                      <Check className="w-4 h-4 text-green-600" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
                <p className="text-xs text-gray-500">Share with rider</p>
              </div>
            </div>
          </div>
        </div>

        {/* Instructions */}
        <div className="bg-blue-50 rounded-xl p-6 mb-6 border border-blue-200">
          <h3 className="text-lg font-semibold text-blue-800 mb-3">Important Instructions</h3>
          <ul className="text-blue-700 text-sm space-y-2">
            <li>• Share the OTP only with your confirmed rider</li>
            <li>• Wait at the pickup location, your rider will call you</li>
            <li>• Verify the rider's name and vehicle number before boarding</li>
            <li>• Don't share the OTP until you see the rider and vehicle</li>
          </ul>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-4">
          <button
            onClick={() => navigate('/user-dashboard')}
            className="flex-1 bg-gray-200 text-gray-800 py-3 rounded-lg hover:bg-gray-300 transition-colors font-medium"
          >
            Back to Dashboard
          </button>
          <button
            className="flex-1 bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 transition-colors font-medium"
            onClick={() => {
              if (window.confirm('Are you sure you want to cancel this ride?')) {
                navigate('/user-dashboard');
              }
            }}
          >
            Cancel Ride
          </button>
        </div>

        {/* Live Tracking Mockup */}
        <div className="mt-6 bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Live Tracking</h3>
          <div className="bg-gray-100 rounded-lg h-48 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-2" />
              <p className="text-gray-500">Map integration would appear here</p>
              <p className="text-sm text-gray-400">Real-time rider location tracking</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RideConfirmation;