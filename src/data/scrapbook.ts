export interface ScrapbookPhoto {
  id: number;
  url: string;
  caption: string;
  destination: string;
  rotate: string;
  size: 'sm' | 'md' | 'lg';
  note?: string;
}

export const scrapbookPhotos: ScrapbookPhoto[] = [
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80',
    caption: 'Mist over Manali Peak',
    destination: 'Manali, India',
    rotate: '-3deg',
    size: 'lg',
    note: 'Morning mist at 4,200m'
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1561361531-99e224be4c2a?auto=format&fit=crop&w=800&q=80',
    caption: 'Varanasi Ghats at Dawn',
    destination: 'Varanasi, India',
    rotate: '2.5deg',
    size: 'md',
    note: 'The eternal city awakens'
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1604999333679-b86d54738315?auto=format&fit=crop&w=800&q=80',
    caption: 'Sikkim Monastery Chimes',
    destination: 'Sikkim, India',
    rotate: '-1.5deg',
    size: 'sm'
  },
  {
    id: 4,
    url: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=800&q=80',
    caption: 'Taj Mahal Reflected',
    destination: 'Agra, India',
    rotate: '3.5deg',
    size: 'lg',
    note: 'Golden hour perfection'
  },
  {
    id: 5,
    url: 'https://images.unsplash.com/photo-1589308078059-be1415eab4c3?auto=format&fit=crop&w=800&q=80',
    caption: 'Kerala Tea Plantations',
    destination: 'Munnar, India',
    rotate: '-2deg',
    size: 'md'
  },
  {
    id: 6,
    url: 'https://images.unsplash.com/photo-1598091383021-15ddea10925d?auto=format&fit=crop&w=800&q=80',
    caption: 'Kashmir Valley Meadows',
    destination: 'Kashmir, India',
    rotate: '1.5deg',
    size: 'sm',
    note: 'Paradise on earth'
  }
];
