import { DatePipe } from '@angular/common';
import { Component, input } from '@angular/core';
import { PostComment } from '../../data/interfaces/post.interface';
import { AvatarCircleComponent } from '@apps/common-ui';



@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'app-comment',
  standalone: true,
  imports: [DatePipe, AvatarCircleComponent],
  templateUrl: './comment.component.html',
  styleUrl: './comment.component.scss',
})
export class CommentComponent {
  comment = input<PostComment>();
}
