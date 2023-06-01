import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private serviceUrl: string = environment.serverUrl;

  constructor(private http: HttpClient) { }

  public resgisterUser(data: {nombres: string, correo: string, clave: string}){
    return this.http.post(`${this.serviceUrl}/usuarios/nuevo`,data

    );
  }
}
