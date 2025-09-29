import { Component, inject } from '@angular/core';
import { ProfileCard } from '../../common-ui/profile-card/profile-card';
import { ProfileService } from '@apps/profile';

@Component({
  selector: 'app-search-page',
  imports: [ProfileCard],
  standalone: true,
  templateUrl: './search-page.component.html',
  styleUrl: './search-page.component.scss',
})
export class SearchPageComponent {

  private profileService = inject(ProfileService);
  profiles:any=[]

  constructor() { this.profileService.getTestAccounts().subscribe(profiles => this.profiles = profiles);
  }

}
