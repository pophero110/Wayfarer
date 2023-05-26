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
    iconUrl: '../../assets/images/1.jpeg',
    country: 'United Kingdom',
  },
  {
    id: '2',
    name: 'Sydney',
    iconUrl: '../../assets/images/2.webp',
    country: 'Australia',
  },
  {
    id: '3',
    name: 'San Francisco',
    iconUrl: '../../assets/images/3.jpeg',
    country: 'United States of America',
  },
  {
    id: '4',
    name: 'Seattle',
    iconUrl: '../../assets/images/4.jpeg',
    country: 'United States of America',
  },
];
