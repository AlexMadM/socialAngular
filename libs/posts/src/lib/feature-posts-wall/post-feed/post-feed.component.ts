import { Component } from '@angular/core';
import { PostInputComponent } from '../../ui';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'app-post-feed',
  imports: [PostInputComponent],
  templateUrl: './post-feed.component.html',
  styleUrl: './post-feed.component.scss',
})
export class PostFeedComponent {}
