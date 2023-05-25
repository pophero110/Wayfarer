// represent post object
export interface Post {
  cityId: string;
  title: string;
  summary: string;
  thumbnailUrl: string;
}

export const posts: Post[] = [
  {
    cityId: '1',
    title: 'title from 1',
    summary: 'summary from 1',
    thumbnailUrl: '../../assets/images/1.jpeg',
  },
  {
    cityId: '2',
    title: 'title from 2',
    summary: 'summary from 2',
    thumbnailUrl: '../../assets/images/2.webp',
  },
  {
    cityId: '3',
    title: 'title from 3',
    summary: 'summary from 3',
    thumbnailUrl: '../../assets/images/3.jpeg',
  },
  {
    cityId: '4',
    title: 'title from 4',
    summary: 'summary from 4',
    thumbnailUrl: '../../assets/images/4.jpeg',
  },
];
