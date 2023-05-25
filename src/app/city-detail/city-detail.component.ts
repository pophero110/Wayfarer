import { Component } from '@angular/core';

// represent post object
interface Post {
  title: string;
  summary: string;
  thumbnailUrl: string;
}

@Component({
  selector: 'app-city-detail',
  templateUrl: './city-detail.component.html',
  styleUrls: ['./city-detail.component.css'],
})
export class CityDetailComponent {
  posts: Post[] = [
    {
      title: 'title',
      summary: 'summary',
      thumbnailUrl: '../../assets/images/1.jpeg',
    },
    {
      title: 'title',
      summary: 'summary',
      thumbnailUrl: '../../assets/images/1.jpeg',
    },
    {
      title: 'title',
      summary: 'summary',
      thumbnailUrl: '../../assets/images/1.jpeg',
    },
  ];
}
