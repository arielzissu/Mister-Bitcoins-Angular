import { Injectable } from '@angular/core';
import { Contact } from '../models/contact-model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  newId = '6';
  newImgUrl = `https://robohash.org/${this.newId}`;
  private _contacts: Contact[] = [
    { id: 'p123', name: 'Kobi', email:'Kobi@gamil.com' , phone: 54231325, imgUrl: 'https://robohash.org/1' },
    { id: 'p124', name: 'Roni', email:'Roni@gamil.com' , phone: 52441286, imgUrl: 'https://robohash.org/2'},
    { id: 'p125', name: 'Ilan', email:'Ilan@gamil.com' , phone: 50552773, imgUrl: 'https://robohash.org/3'},
    { id: 'p126', name: 'Keren', email:'Ilan@gamil.com' , phone: 50532711, imgUrl: 'https://robohash.org/4'},
    { id: 'p127', name: 'Rachel', email:'Ilan@gamil.com' , phone: 50652712, imgUrl: 'https://robohash.org/5'}
  ];

  private _contacts$ = new BehaviorSubject<Contact[]>(this._contacts);
  public contacts$ = this._contacts$.asObservable()

  public loadContacts(filterBy = { term: '' }) {
    const contacts = this._contacts.filter(({ name }) => {
      return name.toLowerCase().includes(filterBy.term.toLowerCase());
    });
    this._contacts$.next(contacts);
  }

  public getContact(contactId) {
    const currcontact = this._contacts.find(contact => contact.id === contactId);
    return currcontact;
  }
  
  public setContact(changedContact){
    const currIdx = this._contacts.findIndex(contact => contact.id === changedContact.id);
    this._contacts.splice(currIdx, 1 ,changedContact)
  }

  public addContact(newContact){
    newContact.id = this.newId;
    newContact.imgUrl = this.newImgUrl;
    this._contacts.push(newContact);

    // update the id up //
    let ezer =(+this.newId);
    ezer++;
    let ezer1 = ezer + '';
    this.newId = ezer1;
  }

  public deleteContact(currContactId){
    const currIdx = this._contacts.findIndex(contact => contact.id === currContactId);
    this._contacts.splice(currIdx, 1 )
  }

  constructor() { }
}
