import { Injectable } from '@angular/core';
import { Post, posts } from '../data/posts';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor() {}
  /**
   * Find a post by searching for the given text in the title or content.
   *
   * @param text The text to search for in the title or content of the post.
   * @returns The found Post object if a match is found, otherwise undefined.
   */
  findPostByTitleOrContentOrAuthor(text: string): Post | undefined {
    // Find a post by title that includes the given text
    let foundPostByTitle = posts.find((post) =>
      post.title.toLowerCase().includes(text.toLowerCase())
    );
    if (foundPostByTitle) return foundPostByTitle;
    // Find a post by content that includes the given text
    let foundPostByContent = posts.find((post) =>
      post.content.toLowerCase().includes(text.toLowerCase())
    );
    if (foundPostByContent) return foundPostByContent;
    let foundPostByAuthor = posts.find((post) =>
      post.author.toLowerCase().includes(text.toLowerCase())
    );
    return foundPostByAuthor;
  }

  /**
   * Find a post by its unique identifier.
   *
   * @param postId The ID of the post to search for.
   * @returns The found Post object if a match is found, otherwise undefined.
   */
  findPostById(postId: string): Post | undefined {
    return posts.find((post) => post.id === postId);
  }
}
