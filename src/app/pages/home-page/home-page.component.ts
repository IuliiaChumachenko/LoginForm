import { Component, OnInit } from '@angular/core';
import {DateStorageService} from '../../services/date-storage.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  public name: string;

  constructor(
    private dateStorageService: DateStorageService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.name = this.dateStorageService.fromLocalStorage('name');
  }

  public onBtnClick(): void {
    this.router.navigate(['login']);
  }

}
