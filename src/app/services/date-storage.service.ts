import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateStorageService {

  public toLocalStorage(name: string, value: string): void {
    localStorage.setItem(name, value);
  }

  public fromLocalStorage(name: string): string {
    return localStorage.getItem(name);
  }
}
