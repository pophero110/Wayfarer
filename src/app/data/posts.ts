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
    content: 'I do find London exciting. Much as I hate to agree with that tedious old git Samuel Johnson, and despite the pompous imbecility of his famous remark about holidays, I can’t dispute it.',
    thumbnailUrl: '../../assets/images/1.jpeg',
    author: 'Bill Bryson',
  },

  // test post title 208 characters
  { id: '1',
  cityId: '1',
  title: 'First Post possssssssssssssssssssssssssssssssst pppppppppppppppppppppppppp dddddddddddddddd fffffffffffffffffffffffffffffffffffffffff In Seattle, we live among the trees and thewaterwaysand we feel we are rocked gently in ',
  content: 'I do find London exciting. Much as I hate to agree with that tedious old git Samuel Johnson, and despite the pompous imbecility of his famous remark about when a man is the sky over London was glorious.',
  thumbnailUrl: '../../assets/images/1.jpeg',
  author: 'Bill Bryson',
},

  {
    id: '2',
    cityId: '2',
    title: 'Second Post',
    content: 'I love Sydney! Sydney is home to must-visit icons like the Sydney Harbour Bridge and Opera House, but this Harbour City is constantly evolving. New rooftop bars, theatre shows and designer shops.',
    thumbnailUrl: '../../assets/images/2.webp',
    author: 'Jane Smith',
  },
  {
    id: '3',
    cityId: '3',
    title: 'Third Post',
    content: 'I never dreamed I’d like any city as well as San Francisco. San Francisco is exciting, moody, exhilarating. I even love the muted fogs. In San Francisco, we live among the trees and the waterways.',
    thumbnailUrl: '../../assets/images/3.jpeg',
    author: 'Mike Johnson',
  },
  {
    id: '4',
    cityId: '4',
    title: 'Fourth Post',
    content: 'In Seattle, we live among the trees and the waterways, and we feel we are rocked gently in the cradle of life. Our winters are not cold and our summers are not hot and we congratulate ourselves.',
    thumbnailUrl: '../../assets/images/4.jpeg',
    author: 'Emily Davis',
  },




];
