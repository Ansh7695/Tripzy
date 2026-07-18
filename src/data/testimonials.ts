export interface Testimonial {
  id: number;
  name: string;
  role: string;
  destination: string;
  quote: string;
  rating: number;
  avatar: string;
  duration?: string;
  travelType?: string;
  date?: string;
  verified?: boolean;
  type: 'feature' | 'quote' | 'rating' | 'image' | 'experience' | 'mini';
  image?: string;
  shortPhrase?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Aria Thompson',
    role: 'Solo Explorer',
    destination: 'Ladakh, India',
    quote: 'The Ladakh trip was pure magic. Every morning I woke up to pristine mountain air and monasteries draped in prayer flags. The guides were exceptional — they shared stories that no guidebook could.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80',
    duration: '7 Days',
    travelType: 'Solo Adventure',
    date: 'June 2026',
    verified: true,
    type: 'feature'
  },
  {
    id: 2,
    name: 'Julian Carter',
    role: 'Travel Blogger',
    destination: 'Bali, Indonesia',
    quote: 'Absolutely fell in love with the itinerary. From hidden temples to sunrise volcano treks, every moment felt curated by someone who truly understands slow, intentional travel.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80',
    duration: '6 Days',
    travelType: 'Spiritual Walk',
    date: 'May 2026',
    verified: true,
    type: 'experience'
  },
  {
    id: 3,
    name: 'Elena Rostova',
    role: 'Family Vacationer',
    destination: 'Kerala, India',
    quote: 'Everything was organized to perfection. From the serene houseboat mornings to the thrilling spice plantation walks — my children still talk about it.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80',
    type: 'quote',
    shortPhrase: 'We don\'t just visit — we live the destination.'
  },
  {
    id: 4,
    name: 'Marcus Chen',
    role: 'Luxury Traveller',
    destination: 'Santorini, Greece',
    quote: 'Boutique cave hotels, private yacht sunsets, and authentic dining.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
    verified: true,
    type: 'image',
    image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 5,
    name: 'Sophie Laurent',
    role: 'Honeymoon Couple',
    destination: 'Maldives',
    quote: 'Our honeymoon was nothing short of a dream. Private overwater villa and sandbank dinners.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80',
    type: 'mini',
    shortPhrase: 'Best trip ever!'
  },
  {
    id: 6,
    name: 'Rohan Dev',
    role: 'Adventure Enthusiast',
    destination: 'Spiti Valley',
    quote: 'Riding through high wind passes with local experts. Perfect execution.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&q=80',
    type: 'mini',
    shortPhrase: 'Loved every single moment.'
  },
  {
    id: 7,
    name: 'Sarah Jenkins',
    role: 'Culture seeker',
    destination: 'Rajasthan',
    quote: 'Staying in royal forts and walking heritage trails with storytellers.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
    type: 'mini',
    shortPhrase: 'Exceptional planning and detail.'
  }
];

export const trustStats = [
  { value: 4.9, suffix: '/5', label: 'Average Rating', isRating: true },
  { value: 15000, suffix: '+', label: 'Happy Travellers' },
  { value: 120, suffix: '+', label: 'Destinations' },
  { value: 98, suffix: '%', label: 'Recommendation Rate' }
];
