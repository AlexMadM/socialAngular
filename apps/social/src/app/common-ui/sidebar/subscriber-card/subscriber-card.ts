import { Component, Input } from '@angular/core';
import { Profile } from '@apps/profile';
import { ImgUrlPipe } from '@apps/common-ui';

@Component({
  selector: 'app-subscriber-card',
  imports: [ImgUrlPipe],
  templateUrl: './subscriber-card.html',
  styleUrl: './subscriber-card.scss',
})
export class SubscriberCard {
  @Input() profile!: Profile;
}
