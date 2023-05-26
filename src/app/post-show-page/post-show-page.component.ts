import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from '../services/post.service';
import { Post } from '../data/posts';
@Component({
  selector: 'app-post-show-page',
  templateUrl: './post-show-page.component.html',
  styleUrls: ['./post-show-page.component.css'],
})
export class PostShowPageComponent implements OnInit {
  post!: Post;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private postService: PostService
  ) {}
  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      if (id !== null) {
        let post = this.postService.findPostById(id);
        if (post) {
          this.post = post;
        } else {
          this.router.navigate(['/404']);
        }
      }
    });
  }
}
