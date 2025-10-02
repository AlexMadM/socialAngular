import {
  AfterViewInit,
  Component,
  ElementRef,
  inject,
  Renderer2,
} from '@angular/core';
import { PostInputComponent } from '../../ui';
import { PostComponent } from '../post/post.component';
import { PostService } from '../../data/services/post-service';
import { firstValueFrom, fromEvent } from 'rxjs';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'app-post-feed',
  imports: [PostInputComponent, PostComponent],
  templateUrl: './post-feed.component.html',
  styleUrl: './post-feed.component.scss',
})
export class PostFeedComponent implements AfterViewInit {
  postService = inject(PostService);
  hostElement = inject(ElementRef);
  r2 = inject(Renderer2);

  feed = this.postService.posts;
  constructor() {
    firstValueFrom(this.postService.getPosts());
  }

  ngAfterViewInit() {
    this.resizeFeed();

    fromEvent(window, 'resize').subscribe(() => {
      console.log(12313);
    });
  }

  resizeFeed() {
    const { top } = this.hostElement.nativeElement.getBoundingClientRect();

    const height = window.innerHeight - top - 24 - 24;

    this.r2.setStyle(this.hostElement.nativeElement, 'height', `${height}px`);
  }
}

