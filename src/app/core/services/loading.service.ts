import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class LoadingService {
  private loading$ = new BehaviorSubject(false);

  loadingState$ = this.loading$.asObservable();

  show() {
    this.loading$.next(true);
  }

  hide() {
    this.loading$.next(false);
  }
}
