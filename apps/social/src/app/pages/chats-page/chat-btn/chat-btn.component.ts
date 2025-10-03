import { Component, input } from '@angular/core';
import { LastMessageRes } from '../../../data/interface/chats.interface';
import { AvatarCircleComponent } from '@apps/common-ui';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'button[chats]',
  imports: [AvatarCircleComponent],
  templateUrl: './chat-btn.component.html',
  styleUrl: './chat-btn.component.scss',
})
export class ChatBtnComponent {
  chat = input<LastMessageRes>();
}
