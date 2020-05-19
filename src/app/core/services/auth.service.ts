import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }

  login(payload) {
    return this.httpClient.post("http://localhost:8080/login", payload);
  }

  register(payload) {
    return this.httpClient.post("http://localhost:8080/user/register", payload);
  }

}
