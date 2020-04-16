import { Injectable } from '@angular/core';
import { User } from '../models/user-model';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class userService {
  newId: any = '11';
  private _users: User[] = [ ];

  private _users$ = new BehaviorSubject<User[]>(this._users);
  public users$ = this._users$.asObservable()

  public loadUsers(filterBy = { term: '' }) {
    const users = this._users.filter(({ name }) => {
      return name.toLowerCase().includes(filterBy.term.toLowerCase());
    });
    this._users$.next(users);
  }

  public getUser() {
    let user = localStorage.getItem('USER');
    return JSON.parse(user);
  }

  public signUp(name){
    const newUser ={
      id: this.newId,
      name,
      coins: 100,
      moves:[ ]
    };
    this._users.push(newUser);
    localStorage.setItem('USER', JSON.stringify(this._users))

    // update the id up //
     let ezer =(+this.newId);
     ezer++;
     let ezer1 = ezer + '';
     this.newId = ezer1;
  }

  public addMove(contact, amount){
    let user:any = localStorage.getItem('USER');
    user = JSON.parse(user);
    user[0].coins = user[0].coins - amount; 
    user[0].moves.push({toId: contact.id, to: contact.name, at: Date.now(), amount});
    localStorage.setItem('USER', JSON.stringify(user))
  }

  public isLoggedin(){
    let user = localStorage.getItem('USER');
    user = JSON.parse(user);
    if(user) return true;
    return false;
  }

  constructor() { }
}
