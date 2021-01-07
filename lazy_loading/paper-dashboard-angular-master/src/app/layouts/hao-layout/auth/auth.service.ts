import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isGoEdit = false;
  redirectUrl: string;
  goEdit(): Observable<boolean> {
    return of(true).pipe(
      delay(1000),
      tap(val => this.isGoEdit = true)
    );
  }
  backList(): void{
    this.isGoEdit = false;
  }
  constructor() { }
}
