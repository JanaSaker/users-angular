import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { debounceTime, Subject } from 'rxjs';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, MatToolbarModule, MatInputModule],
  templateUrl: './header.html',
  styleUrls: ['./header.scss']
})
export class HeaderComponent {
  private search$ = new Subject<string>();

  constructor(private router: Router) {
    this.search$
      .pipe(debounceTime(300))
      .subscribe(value => {
        const id = Number(value);
        if (!isNaN(id)) {
          this.router.navigate(['/users', id]);
        }
      });
  }

  onSearch(value: string) {
    this.search$.next(value);
  }
}
