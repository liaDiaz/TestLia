import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import{RestaurantesModule} from 'src/app/models/restaurantes/restaurantes.module';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {
  public restaurantes: RestaurantesModule[] = [];
 //public restaurante: RestaurantesModule = null;
  
 httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'text/html',
    'Access-Control-Allow-Origin' : '*',
    'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, HEAD, OPTIONS'
  })
}

  constructor(private http: HttpClient) { }
  
  // getJson(url: string) {
  //   return this.http.get(url);
  // }

  getLocalDB(): Observable<RestaurantesModule[]> {
    let path = "/assets/data/readData.json";
    return this.http.get<RestaurantesModule[]>(path);
  }
  
  
  
    



}
