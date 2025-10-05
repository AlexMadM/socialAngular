import { Route, Routes } from '@angular/router';
import { LayoutComponent } from './common-ui/layout/layout.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { LoginPage } from './pages/login-page/login.page';
import { canActivateAuth } from '@apps/auth';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { chatsRoutes } from './pages/chats-page/chatsRoutes';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'profile/me', pathMatch: 'full' },
      { path: 'profile/:id', component: ProfilePageComponent },
      // { path: 'settings', component: SettingsPageComponent },
      { path: 'search', component: SearchPageComponent },
      {
        path: 'chats',
        loadChildren: () => chatsRoutes,
      },
    ],
    canActivate: [canActivateAuth],
  },
  { path: 'login', component: LoginPage },
];
