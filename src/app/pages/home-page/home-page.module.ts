import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page.component';
import { RouterModule, Routes } from '@angular/router';
import { DateStorageService } from '../../services/date-storage.service';

// const routes: Routes = [
//   {
//     path: '',
//     component: HomePageComponent,
//   },
// ];

@NgModule({
  declarations: [HomePageComponent],
  imports: [
    // RouterModule.forChild(routes),
    CommonModule,
  ],
  exports: [
    HomePageComponent,
  ],
  providers: [
    DateStorageService
  ]
})
export class HomePageModule { }
