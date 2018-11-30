import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DateStorageService } from '../services/date-storage.service';

const components = [
  LoginComponent,
];

@NgModule({
  declarations: [...components],
  exports: [...components],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  providers: [ DateStorageService ]
})
export class LoginModule { }
