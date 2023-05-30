export // represent the city object
interface City {
  id: string;
  iconUrl: string;
  name: string;
  country: string;
}

export const cities = [
  {
    id: '1',
    name: 'London',
    iconUrl: '/assets/images/london.png',
    country: 'United Kingdom',
  },
  {
    id: '2',
    name: 'Sydney',
    iconUrl: '/assets/images/sydney-3.png',
    country: 'Australia',
  },
  {
    id: '3',
    name: 'San Francisco',
    iconUrl: '/assets/images/san-francisco.png',
    country: 'United States of America',
  },
  {
    id: '4',
    name: 'Seattle',
    iconUrl: '/assets/images/seattle-4.png',
    country: 'United States of America',
  },
  {
    id: '5',
    name: 'Gibraltar',
    iconUrl: '/assets/images/gibraltar.webp',
    country: 'British Overseas Territory',
  },
];
