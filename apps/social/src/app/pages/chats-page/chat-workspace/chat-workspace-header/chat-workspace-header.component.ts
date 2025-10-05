import { Component, input } from '@angular/core';
import { Profile } from '@apps/profile';
import { AvatarCircleComponent } from '@apps/common-ui';

@Component({
  selector: 'app-chat-workspace-header',
  imports: [AvatarCircleComponent],
  templateUrl: './chat-workspace-header.component.html',
  styleUrl: './chat-workspace-header.component.scss',
})
export class ChatWorkspaceHeaderComponent {
  profile = input.required<Profile>();
}
