import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor() {}
  // simular api
  async consumirJSONLocal(): Promise<any> {
    try {
      const respuesta = await axios.get('assets/movies.json');
      return respuesta.data;
    } catch (error) {
      console.error('Error al consumir el archivo JSON:', error);
    }
  }
}
