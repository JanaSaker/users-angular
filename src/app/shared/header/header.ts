import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { debounceTime, Subject } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrls: ['./header.scss']
})
export class HeaderComponent {
  private search$ = new Subject<string>();

  constructor(private router: Router) {
    this.search$
      .pipe(debounceTime(300))
      .subscribe(value => {
        const trimmed = (value || '').toString().trim();

        // If the input was cleared, go back to the users list page
        if (trimmed === '') {
          this.router.navigate(['/users']);
          return;
        }

        const id = Number(trimmed);
        // Only navigate when a positive numeric id is provided
        if (!isNaN(id) && id > 0) {
          this.router.navigate(['/users', id]);
        }
      });
  }

  onSearch(value: string) {
    this.search$.next(value);
  }
}
