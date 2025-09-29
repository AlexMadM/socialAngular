import { Component, inject, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ImgUrlPipe,SvgIconComponent } from '@apps/common-ui';
import { ProfileService } from '@apps/profile';
import { SubscriberCard } from './subscriber-card/subscriber-card';
import { firstValueFrom } from 'rxjs';
import { AsyncPipe } from '@angular/common';


@Component({
  selector: 'app-sidebar',
  imports: [
    RouterLink,
    SvgIconComponent,
    RouterLinkActive,
    ImgUrlPipe,
    SvgIconComponent,
    SubscriberCard,
    AsyncPipe,
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
  standalone: true,
})
export class SidebarComponent implements OnInit {
  profileService = inject(ProfileService);
  subcribers$ = this.profileService.getSubscribersShortList();

  me = this.profileService.me;
  menuItems = [
    {
      label: 'Моя страница',
      icon: 'home',
      link: 'profile/me',
    },
    {
      label: 'Чаты',
      icon: 'chats',
      link: 'chats',
    },
    {
      label: 'Поиск',
      icon: 'search',
      link: 'search',
    },
  ];
  ngOnInit() {
    firstValueFrom(this.profileService.getMe());
  }
}
