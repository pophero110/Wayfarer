import { Directive, HostListener } from '@angular/core';
import { CityService } from '../services/city.service';
import { PostService } from '../services/post.service';
import { Router } from '@angular/router';

@Directive({
  selector: '[appSearchQuery]',
})
export class SearchQueryDirective {
  constructor(
    private cityService: CityService,
    private postService: PostService,
    private router: Router
  ) {}

  @HostListener('submit', ['$event'])
  onSubmit(event: Event) {
    if (event.target !== null) {
      const inputElement = (event.target as HTMLInputElement).querySelector(
        'input'
      );
      if (inputElement !== null) {
        let userSearchText = inputElement.value;
        if (this.findCityByNameAndShowCityPage(userSearchText)) return;
        if (this.findPostByNameOrContentAndShowPostPage(userSearchText)) return;
        alert(
          `Can not find any post or city with given text '${userSearchText}'`
        );
      }
    }
  }

  private findCityByNameAndShowCityPage(text: string): boolean {
    let city = this.cityService.findCityByName(text);
    if (city) {
      this.router.navigate(['/cities/' + city.id]);
      return true;
    }
    return false;
  }

  private findPostByNameOrContentAndShowPostPage(text: string): boolean {
    let post = this.postService.findPostByTitleOrContentOrAuthor(text);
    if (post) {
      this.router.navigate(['/posts/' + post.id]);
      return true;
    }
    return false;
  }
}
