import { Component, inject, Inject } from '@angular/core';
import { ProfileService } from '@apps/profile';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { subscribeOn, switchMap } from 'rxjs';
import { toObservable } from '@angular/core/rxjs-interop';
import { AsyncPipe } from '@angular/common';
import { ProfileHeaderComponent } from '../../common-ui/profile-header.component';
import { ImgUrlPipe } from '@apps/common-ui';



@Component({
  selector: 'app-profile-page',
  imports: [AsyncPipe, ProfileHeaderComponent, RouterLink, ImgUrlPipe],
  templateUrl: './profile-page.component.html',
  styleUrl: './profile-page.component.scss',
})
export class ProfilePageComponent {
  profileService = inject(ProfileService);
  route = inject(ActivatedRoute);
  me$ = toObservable(this.profileService.me);

  profile$ = this.route.params.pipe(
    switchMap(({ id }) => {
      if (id === 'me') return this.me$;
      return this.profileService.getAccount(id);
    })
  );
  subscribers$ = this.profileService.getSubscribersShortList();
}





