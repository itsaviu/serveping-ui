import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionManagerService {

  tokenName="X-AUTH-TOKEN";

  constructor() { }

  store(token) {
    localStorage.setItem(this.tokenName, token.token);
  }

  clear() {
    localStorage.removeItem(this.tokenName);
  }

  isSessionAvailable() : boolean{
    return localStorage.getItem(this.tokenName) ? true : false;
  }
}
