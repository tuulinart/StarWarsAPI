import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TempDataService {

  private data: any = [];


  constructor() { }


  dataSave(index: string, data: any): boolean {
    if (index) {
      this.data[index] = data;
      return true;
    } else {
      return false;
    }
  }

  giveData(index: string): any {
    if (index) {
      return this.data[index];
    } else {
      return null;
    }
  }



}
