import { Component, OnInit } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

import { UsersService } from '../../../core/services/users.services';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule
  ],
  templateUrl: './user-details.html',
  styleUrls: ['./user-details.scss']
})
export class UserDetailsComponent implements OnInit {
  user: any;
  notFound = false;
  loading = true;

  constructor(
    private route: ActivatedRoute,
    private usersService: UsersService,
    private location: Location
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.loading = true;

    this.usersService.getUserById(id).subscribe({
      next: res => {
        this.user = res?.data ?? null;
        this.notFound = !this.user;
        this.loading = false;
      },
      error: () => {
        this.user = null;
        this.notFound = true;
        this.loading = false;
      }
    });
  }

  goBack() {
    this.location.back();
  }
}
