import { Component, input } from '@angular/core';
import { Profile } from '@apps/profile';
import { AvatarCircleComponent, ImgUrlPipe } from '@apps/common-ui';

@Component({
  selector: 'app-profile-header',
  imports: [ AvatarCircleComponent],
  templateUrl: './profile-header.component.html',
  styleUrl: './profile-header.component.scss',
})
export class ProfileHeaderComponent {
  profile = input<Profile>();

}
