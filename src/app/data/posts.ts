// represent post object
export interface Post {
  cityId: string;
  title: string;
  content: string;
  thumbnailUrl: string;
  author: string;
}

export const posts: Post[] = [
  {
    cityId: '1',
    title: 'title from 1',
    content: 'content from 1',
    thumbnailUrl: '../../assets/images/1.jpeg',
    author: 'author from 1',
  },
  {
    cityId: '2',
    title: 'title from 2',
    content: 'content from 2',
    thumbnailUrl: '../../assets/images/2.webp',
    author: 'author from 2',
  },
  {
    cityId: '3',
    title: 'title from 3',
    content: 'content from 3',
    thumbnailUrl: '../../assets/images/3.jpeg',
    author: 'author from 3',
  },
  {
    cityId: '4',
    title: 'title from 4',
    content: 'content from 4',
    thumbnailUrl: '../../assets/images/4.jpeg',
    author: 'author from 4',
  },
];
