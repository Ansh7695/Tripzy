export interface GalleryImage {
  id: number;
  url: string;
  title: string;
  country: string;
  category: 'Mountains' | 'Beaches' | 'Heritage' | 'Spiritual' | 'Adventure' | 'Nature';
  description: string;
  aspectRatio: 'portrait' | 'landscape' | 'square';
}

export const galleryImages: GalleryImage[] = [
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1598091383021-15ddea10925d?auto=format&fit=crop&w=800&q=80',
    title: 'Gufkral Meadows',
    country: 'Kashmir, India',
    category: 'Nature',
    description: 'Golden hour sunlight warming the pine slopes and wild clover valleys of rural Gulmarg.',
    aspectRatio: 'portrait'
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=800&q=80',
    title: 'Vembanad Waterways',
    country: 'Kerala, India',
    category: 'Nature',
    description: 'A traditional wooden houseboat drifts slowly along coconut-fringed backwater lagoons.',
    aspectRatio: 'landscape'
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=800&q=80',
    title: 'Diskit Monastic Vista',
    country: 'Ladakh, India',
    category: 'Adventure',
    description: 'Ancient whitewashed chambers hanging precariously off the rocky cliffs of Nubra Valley.',
    aspectRatio: 'portrait'
  },
  {
    id: 4,
    url: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=800&q=80',
    title: 'Hawa Mahal Windows',
    country: 'Rajasthan, India',
    category: 'Heritage',
    description: 'The geometric pink sandstone lattices filtering golden sun rays into historic court chambers.',
    aspectRatio: 'square'
  },
  {
    id: 5,
    url: 'https://images.unsplash.com/photo-1589308078059-be1415eab4c3?auto=format&fit=crop&w=800&q=80',
    title: 'Havelock Shoreline',
    country: 'Andaman Islands',
    category: 'Beaches',
    description: 'Pristine turquoise waters washing onto coral sands under the shade of ancient padauk trees.',
    aspectRatio: 'landscape'
  },
  {
    id: 6,
    url: 'https://images.unsplash.com/photo-1561361531-99e224be4c2a?auto=format&fit=crop&w=800&q=80',
    title: 'Ganga Aarti Dawn',
    country: 'Varanasi, India',
    category: 'Spiritual',
    description: 'Devotees gather as flame brass lamps illuminate the sacred river ghats at sunrise.',
    aspectRatio: 'portrait'
  }
];
