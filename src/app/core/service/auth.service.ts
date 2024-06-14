import {Injectable} from '@angular/core';

const Key: string = 'sharing';
const tokenKey: string = 'sharing-token';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public get token(): string | null {
    return localStorage.getItem(tokenKey);
  }

  public set token(value: string | null) {
    if (value == null) {
      localStorage.removeItem(tokenKey);
    } else {
      localStorage.setItem(tokenKey, value);
    }
  }


  public get email_username(): string | null {
    return localStorage.getItem(Key);
  }

  public set email_username(value: string | null) {
    if (value == null) {
      localStorage.removeItem(Key);
    } else {
      localStorage.setItem(Key, value);
    }
  }

  public signOut(): void {
    this.token = null;
    this.email_username = null;
  }
}

