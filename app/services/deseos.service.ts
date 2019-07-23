import { Injectable } from '@angular/core';
import { Lista } from '../models/lista.model';

/*
@Injectable({
  providedIn: 'root'
})
*/
@Injectable()
export class DeseosService {

  listas: Lista[] = [];

  constructor(){
      console.log('Servicio inicializado');
  }
}