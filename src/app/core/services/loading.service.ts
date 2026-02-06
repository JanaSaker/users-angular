import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class LoadingService {
  private loading$ = new BehaviorSubject(false);

  loadingState$ = this.loading$.asObservable();

  show() {
    console.log('[LoadingService] show()');
    Promise.resolve().then(() => this.loading$.next(true));
  }

  hide() {
    console.log('[LoadingService] hide()');
    Promise.resolve().then(() => this.loading$.next(false));
  }
}
