import { Component } from '@angular/core';
import { ChatListComponent } from './chat-list/chat-list.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-chat',
  imports: [ChatListComponent, RouterOutlet],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss',
})
export class ChatsPageComponent {}
