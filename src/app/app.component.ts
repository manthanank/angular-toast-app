import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToastService } from './services/toast.service';
import { ToastComponent } from './toast/toast.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ToastComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor(private toastService: ToastService) {}

  triggerSuccessToast() {
    this.toastService.showToast('Success message!', 'success');
  }

  triggerErrorToast() {
    this.toastService.showToast('Error occurred!', 'error');
  }

  triggerWarningToast() {
    this.toastService.showToast('Warning message!', 'warning');
  }

  triggerInfoToast() {
    this.toastService.showToast('Info message!', 'info');
  }
}
