import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';

@NgModule({
  imports: [RouterModule, MatButtonModule, MatCardModule, MatInputModule],
  declarations: [LoginComponent],
})
export class LoginModule {}

export { LoginComponent };
