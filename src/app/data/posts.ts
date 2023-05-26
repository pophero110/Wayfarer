// represent post object
export interface Post {
  id: string;
  cityId: string;
  title: string;
  content: string;
  thumbnailUrl: string;
  author: string;
}

export const posts: Post[] = [
  {
    id: '1',
    cityId: '1',
    title: 'First Post',
    content: 'This is the content of the first post.',
    thumbnailUrl: '../../assets/images/1.jpeg',
    author: 'John Doe',
  },
  {
    id: '2',
    cityId: '2',
    title: 'Second Post',
    content: 'This is the content of the second post.',
    thumbnailUrl: '../../assets/images/2.webp',
    author: 'Jane Smith',
  },
  {
    id: '3',
    cityId: '3',
    title: 'Third Post',
    content: 'Lorem ipsum dolor sinc ididunt ut labore et dolore magna aliqua.',
    thumbnailUrl: '../../assets/images/3.jpeg',
    author: 'Mike Johnson',
  },
  {
    id: '4',
    cityId: '4',
    title: 'Fourth Post',
    content: 'This is the content of the fourth post.',
    thumbnailUrl: '../../assets/images/4.jpeg',
    author: 'Emily Davis',
  },
];
