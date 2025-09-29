import { Component, Input } from '@angular/core';
import { ImgUrlPipe } from '@apps/common-ui';
import { Profile } from '@apps/profile';

@Component({
  selector: 'app-profile-card',
  imports: [ImgUrlPipe],
  templateUrl: './profile-card.html',
  styleUrl: './profile-card.scss',
})
export class ProfileCard {
  @Input() profile!: Profile;
}
