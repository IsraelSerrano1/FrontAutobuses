import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Autobus } from './_modelo/Autobus';

@Injectable({
  providedIn: 'root'
})
export class AutobusService {
  private url:string='http://localhost:8020/autobuses'

    constructor(private http:HttpClient) { }

    listar():Observable<Autobus[]>{
      console.log(this.http.get<Autobus[]>(this.url))
      return this.http.get<Autobus[]>(this.url)
    }

  
}
