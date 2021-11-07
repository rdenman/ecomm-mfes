import { ChangeDetectionStrategy, Component } from '@angular/core';

export const ROOT_SELECTOR = 'ecomm-auth-root';

@Component({
  selector: ROOT_SELECTOR,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {}
