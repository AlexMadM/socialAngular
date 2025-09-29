import { Component, inject, Inject } from '@angular/core';
import { ProfileService } from '@apps/profile';
import { ActivatedRoute } from '@angular/router';
import {  switchMap } from 'rxjs';
import { toObservable } from '@angular/core/rxjs-interop';
import { AsyncPipe } from '@angular/common';
import { ProfileHeaderComponent } from '../../common-ui/profile-header.component';



@Component({
  selector: 'app-profile-page',
  imports: [AsyncPipe, ProfileHeaderComponent],
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
}



