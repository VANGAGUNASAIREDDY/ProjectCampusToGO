export interface Rider {
  id: string;
  name: string;
  rating: number;
  vehicleType: string;
  vehicleNumber: string;
  eta: number;
  price: number;
  profileImage: string;
  phone: string;
  totalRides: number;
}

export interface RideRequest {
  id: string;
  pickupLocation: string;
  dropLocation: string;
  distance: string;
  price: number;
  userId: string;
  userName: string;
  userPhone: string;
  timestamp: Date;
  status: 'pending' | 'accepted' | 'completed' | 'cancelled';
}

export interface RideHistory {
  id: string;
  pickupLocation: string;
  dropLocation: string;
  riderName: string;
  date: Date;
  price: number;
  rating: number;
  status: 'completed' | 'cancelled';
}

export interface Advertisement {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
  type: 'banner' | 'card' | 'popup';
  category: 'fuel' | 'food' | 'gear' | 'accessories' | 'general';
}

export const mockRiders: Rider[] = [
  {
    id: '1',
    name: 'Rajesh Kumar',
    rating: 4.8,
    vehicleType: 'Honda Activa',
    vehicleNumber: 'KA 03 HH 1234',
    eta: 5,
    price: 45,
    profileImage: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    phone: '+91 9876543210',
    totalRides: 342
  },
  {
    id: '2',
    name: 'Priya Sharma',
    rating: 4.9,
    vehicleType: 'TVS Jupiter',
    vehicleNumber: 'KA 05 AB 5678',
    eta: 8,
    price: 50,
    profileImage: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    phone: '+91 8765432109',
    totalRides: 278
  },
  {
    id: '3',
    name: 'Amit Singh',
    rating: 4.7,
    vehicleType: 'Bajaj Pulsar',
    vehicleNumber: 'KA 02 CD 9876',
    eta: 3,
    price: 55,
    profileImage: 'https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    phone: '+91 7654321098',
    totalRides: 456
  },
  {
    id: '4',
    name: 'Sneha Patel',
    rating: 4.6,
    vehicleType: 'Hero Pleasure',
    vehicleNumber: 'KA 01 EF 4567',
    eta: 12,
    price: 40,
    profileImage: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    phone: '+91 6543210987',
    totalRides: 189
  }
];

export const mockRideHistory: RideHistory[] = [
  {
    id: '1',
    pickupLocation: 'Main Campus Gate',
    dropLocation: 'City Mall',
    riderName: 'Rajesh Kumar',
    date: new Date(2024, 0, 15, 14, 30),
    price: 45,
    rating: 5,
    status: 'completed'
  },
  {
    id: '2',
    pickupLocation: 'Library Block',
    dropLocation: 'Metro Station',
    riderName: 'Priya Sharma',
    date: new Date(2024, 0, 12, 9, 15),
    price: 35,
    rating: 4,
    status: 'completed'
  },
  {
    id: '3',
    pickupLocation: 'Hostel Complex',
    dropLocation: 'Airport',
    riderName: 'Amit Singh',
    date: new Date(2024, 0, 10, 18, 45),
    price: 120,
    rating: 5,
    status: 'completed'
  }
];

export const mockRideRequests: RideRequest[] = [
  {
    id: '1',
    pickupLocation: 'Engineering Block',
    dropLocation: 'Central Market',
    distance: '3.2 km',
    price: 40,
    userId: 'user123',
    userName: 'Arjun Mehta',
    userPhone: '+91 9988776655',
    timestamp: new Date(),
    status: 'pending'
  },
  {
    id: '2',
    pickupLocation: 'Sports Complex',
    dropLocation: 'Railway Station',
    distance: '5.8 km',
    price: 65,
    userId: 'user456',
    userName: 'Kavya Reddy',
    userPhone: '+91 8877665544',
    timestamp: new Date(Date.now() - 5 * 60 * 1000),
    status: 'pending'
  },
  {
    id: '3',
    pickupLocation: 'Food Court',
    dropLocation: 'Bus Terminal',
    distance: '2.1 km',
    price: 25,
    userId: 'user789',
    userName: 'Rahul Gupta',
    userPhone: '+91 7766554433',
    timestamp: new Date(Date.now() - 10 * 60 * 1000),
    status: 'pending'
  }
];

export const mockAdvertisements: Advertisement[] = [
  {
    id: '1',
    title: '50% OFF on Helmet',
    description: 'Premium quality helmets at unbeatable prices',
    image: 'https://images.pexels.com/photos/163210/motorcycles-race-helmets-pilots-163210.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&fit=crop',
    link: '#',
    type: 'banner',
    category: 'gear'
  },
  {
    id: '2',
    title: 'Fuel Cashback 10%',
    description: 'Get 10% cashback on every fuel purchase',
    image: 'https://images.pexels.com/photos/33688/delicate-arch-night-stars-landscape.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&fit=crop',
    link: '#',
    type: 'card',
    category: 'fuel'
  },
  {
    id: '3',
    title: 'Free Food Delivery',
    description: 'Order now and get free delivery on your first order',
    image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&fit=crop',
    link: '#',
    type: 'card',
    category: 'food'
  },
  {
    id: '4',
    title: 'Bike Service Special',
    description: 'Complete bike servicing at just ₹299',
    image: 'https://images.pexels.com/photos/190574/pexels-photo-190574.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&fit=crop',
    link: '#',
    type: 'banner',
    category: 'accessories'
  },
  {
    id: '5',
    title: 'Rider Gear Sale',
    description: 'Professional riding gear at wholesale prices',
    image: 'https://images.pexels.com/photos/544966/pexels-photo-544966.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&fit=crop',
    link: '#',
    type: 'card',
    category: 'gear'
  }
];