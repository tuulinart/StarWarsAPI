import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TempDataService {

//Variavel que irá receber o filme da página home temporariamente.
  private data: any = [];
  private img: string;


  constructor() { }

//Função para salvar o filme na variavel data;
  dataSave(index: string, data: any): boolean {
    if (index) {
      this.data[index] = data;
      return true;
    } else {
      return false;
    }
  }

//Função para enviar o filme para página do filme.
  giveData(index: string): any {
    if (index) {
      return this.data[index];
    } else {
      return null;
    }
  }
}
