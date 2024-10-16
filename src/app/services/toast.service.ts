import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  private toasts = new BehaviorSubject<any[]>([]);
  toasts$ = this.toasts.asObservable();

  showToast(
    message: string,
    type: string = 'success',
    duration: number = 3000
  ) {
    const toast = { message, type, id: Math.random() };
    this.toasts.next([...this.toasts.getValue(), toast]);

    setTimeout(() => {
      this.removeToast(toast.id);
    }, duration);
  }

  removeToast(id: number) {
    this.toasts.next(this.toasts.getValue().filter((t) => t.id !== id));
  }
}
