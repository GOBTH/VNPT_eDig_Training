import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { Router } from '@angular/router';
import {NavigationStart} from '@angular/router';
@Injectable()
export class ConfirmDialogService {
  private subject = new Subject<any>();
  confirmThis(message: string, yesFn: ()=>void, noFn:()=>void): any {
    this.setConfirmation(message, yesFn, noFn);
  }
  setConfirmation(message: string, yesFn: () => void, noFn: () => void): any {
    const that = this;

    this.subject.next({
      type: 'confirm',
      text: message,
      yesFn(): any{
        that.subject.next();
        yesFn();
      },
      noFn(): any{
        that.subject.next();
        noFn();
      }
    });
  }
  constructor() { }

  getMessage(): Observable<any>{
    return this.subject.asObservable();
  }
}
