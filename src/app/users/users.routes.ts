import { Routes } from '@angular/router';
import { UserListComponent } from './pages/user-list/user-list';
import { UserDetailsComponent } from './pages/user-details/user-details';

export const USERS_ROUTES: Routes = [
  { path: '', component: UserListComponent },
  { path: ':id', component: UserDetailsComponent }
];
