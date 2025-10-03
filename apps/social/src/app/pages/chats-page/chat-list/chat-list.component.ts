import { Component, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ChatsService } from '../../../data/services/chats-service';
import { AsyncPipe } from '@angular/common';
import { map, startWith, switchMap } from 'rxjs';
import { ChatBtnComponent } from '../chat-btn/chat-btn.component';

@Component({
  selector: 'app-chat-list',
  imports: [
    ReactiveFormsModule,
    RouterLink,
    RouterLinkActive,
    AsyncPipe,
    ChatBtnComponent,
  ],
  templateUrl: './chat-list.component.html',
  styleUrl: './chat-list.component.scss',
})
export class ChatListComponent {
  chatsService = inject(ChatsService);
  filterChatsControl = new FormControl('');

  chats$ = this.chatsService.getMyChats().pipe(
    switchMap((chats) => {
      return this.filterChatsControl.valueChanges.pipe(
        startWith(''),
        map((inputValue) => {
          return chats.filter((chat) => {
            return `${chat.userFrom.lastName} ${chat.userFrom.firstName}`
              .toLowerCase()
              .includes(inputValue?.toLowerCase() ?? '');
          });
        })
      );
    })
  );
}
