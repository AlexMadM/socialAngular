import { Component, inject, input, Renderer2 } from '@angular/core';
import { AvatarCircleComponent, SvgIconComponent } from '@apps/common-ui';
import { ProfileService } from '@apps/profile';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'app-post-input',
  imports: [SvgIconComponent, AvatarCircleComponent],
  templateUrl: './post-input.component.html',
  styleUrl: './post-input.component.scss',
})
export class PostInputComponent {

  r2 = inject(Renderer2);
  //postService = inject(PostService);

  isCommentInput = input(false);
  postId = input<number>(0);
  profile = inject(ProfileService).me;
}
