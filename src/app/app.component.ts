import { Component } from '@angular/core';
import { City, cities} from './data/cities';
import { Post, posts} from './data/posts';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Wayfarer';
  cities: City[] = cities;
  posts: Post[] = posts;
  searchQuery: string = ''; 

  searchPosts(){
    const query = this.searchQuery.toLowerCase();
    const results = [];

    for(const post of this.posts){
      if(post.title.toLowerCase().includes(query) || post.content.toLowerCase().includes(query))
      {
        results.push(post);
      }
    }
  }
}
