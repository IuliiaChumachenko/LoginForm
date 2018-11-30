import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {DateStorageService} from '../services/date-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  public name: string;
  public email: string;
  public password: string;
  public invalidForm = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private dateStorageService: DateStorageService
  ) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      name: ['', [Validators.required,  Validators.pattern('[0-9a-zA-Z!@#$%^&*]{3,9}')]],
      email: ['', [Validators.required,  Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-.]+$')]],
      password: ['', [Validators.required,  Validators.pattern('[0-9a-zA-Z!@#$%^&*]{6,}')]],
    });

    this.onFormChanges();
  }

  public onFormChanges(): void {
    this.loginForm.valueChanges
      .pipe()
      .subscribe(({name, email, password}) => {
        this.name = name;
        this.email = email;
        this.password = password;
      });
  }

  public onBtnClick(): void {
    if (this.loginForm.valid) {
      this.dateStorageService.toLocalStorage('name', this.name);
      this.dateStorageService.toLocalStorage('email', this.email);
      this.dateStorageService.toLocalStorage('password', this.password);
      this.router.navigate(['home']);
    } else {
      this.invalidForm = true;
    }
  }

}
