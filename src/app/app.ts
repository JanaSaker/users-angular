import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MatProgressBarModule } from '@angular/material/progress-bar';

import { HeaderComponent } from './shared/header/header';
import { LoadingService } from './core/services/loading.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    
    MatProgressBarModule,
    HeaderComponent
  ],
  templateUrl: './app.html'
})
export class AppComponent {
  loadingService = inject(LoadingService);
  loading$ = this.loadingService.loadingState$;
}
