import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { RegisterComponent } from './register.component';

@NgModule({
  imports: [RouterModule, MatButtonModule, MatCardModule, MatInputModule],
  declarations: [RegisterComponent],
})
export class RegisterModule {}

export { RegisterComponent };
