import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';

import { UsersService } from '../../../core/services/users.services';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    MatPaginatorModule
  ],
  templateUrl: './user-list.html',
  styleUrls: ['./user-list.scss']
})
export class UserListComponent implements OnInit {
  users: any[] = [];
  total = 0;
  page = 1;

  constructor(
    private usersService: UsersService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this.usersService.getUsers(this.page).subscribe(res => {
      this.users = res.data;
      this.total = res.total;
    });
  }

  onPageChange(event: PageEvent) {
    this.page = event.pageIndex + 1;
    this.loadUsers();
  }

  openUser(id: number) {
    this.router.navigate(['/users', id]);
  }
}
