// represent post object
export interface Post {
  id: string;
  cityId: string;
  title: string;
  content: string;
  thumbnailUrl: string;
  author: string;
}
const londonPosts = [
  {
    id: '1',
    cityId: '1',
    title: 'Exploring the Vibrant Streets of London',
    content:
      'Discover hidden gems and immerse yourself in the vibrant atmosphere of London.',
    thumbnailUrl: '/assets/images/london-2.png',
    author: 'John Doe',
  },
  {
    id: '2',
    cityId: '1',
    title: 'A Culinary Journey through London',
    content:
      'London is a culinary paradise offering a delightful array of flavors and cuisines. From traditional British dishes to international fusion creations, the city caters to every palate. Explore charming local markets, indulge in afternoon tea, and dine at world-class restaurants showcasing the best of British and global gastronomy. Embark on a mouthwatering journey through London and experience the vibrant culinary scene that will leave you craving for more.',
    thumbnailUrl: '/assets/images/london-2.png',
    author: 'John Doe',
  },
  {
    id: '3',
    cityId: '1',
    title: 'Uncovering the Rich History of London',
    content: 'Explore iconic landmarks and delve into the history of London.',
    thumbnailUrl: '/assets/images/london.png',
    author: 'John Doe',
  },
  {
    id: '4',
    cityId: '1',
    title: 'Shopping Spree in London',
    content:
      'Experience the lively markets of London and indulge in a shopping extravaganza.',
    thumbnailUrl: '/assets/images/london.png',
    author: 'John Doe',
  },
];

const sydneyPosts = [
  {
    id: '5',
    cityId: '2',
    title: 'Breathtaking Views of Sydney',
    content:
      'Admire the stunning Sydney Opera House and soak up the beauty of the city.',
    thumbnailUrl: '/assets/images/sydney-2.png',
    author: 'Jane Smith',
  },
];

const sanFranciscoPosts = [
  {
    id: '6',
    cityId: '3',
    title: 'Eclectic Charm of San Francisco',
    content:
      'Discover the unique neighborhoods and iconic landmarks of San Francisco.',
    thumbnailUrl: '/assets/images/san-francisco-2.png',
    author: 'Mike Johnson',
  },
];

const seattlePosts = [
  {
    id: '7',
    cityId: '4',
    title: 'Vibrant Music and Coffee Culture in Seattle',
    content:
      'Immerse yourself in the vibrant music and coffee scene of Seattle.',
    thumbnailUrl: '/assets/images/seattle-2.png',
    author: 'Emily Davis',
  },
];

const gibraltarPosts = [
  {
    id: '8',
    cityId: '5',
    title: 'Blend of British and Mediterranean Influences in Gibraltar',
    content:
      'Experience the unique cultural blend of British and Mediterranean influences in Gibraltar.',
    thumbnailUrl: '/assets/images/gibraltar.webp',
    author: 'Emily Davis',
  },
  /* post with title over 200 characters */
  {
    id: '9',
    cityId: '5',
    title:
      'A Culinary Journey through LondonA Culinary Journey through LondonA Culinary Journey through LondonA Culinary Journey through LondonA Culinary Journey through LondonA Culinary Journey through LondonA Culinary Journey through LondonA Culinary Journey through LondonA Culinary Journey through LondonA Culinary Journey through LondonA Culinary Journey through London',
    content:
      'London is a culinary paradise offering a delightful array of flavors and cuisines. From traditional British dishes to international fusion creations, the city caters to every palate. Explore charming local markets, indulge in afternoon tea, and dine at world-class restaurants showcasing the best of British and global gastronomy. Embark on a mouthwatering journey through London and experience the vibrant culinary scene that will leave you craving for more.',
    thumbnailUrl: '/assets/images/london-2.png',
    author: 'John Doe',
  },
  /* post with empty content*/
  {
    id: '10',
    cityId: '5',
    title: 'A Culinary Journey through LondonA',
    content: '',
    thumbnailUrl: '/assets/images/london-2.png',
    author: 'John Doe',
  },
];

export const posts: Post[] = [
  ...londonPosts,
  ...sydneyPosts,
  ...sanFranciscoPosts,
  ...seattlePosts,
  ...gibraltarPosts,
];
