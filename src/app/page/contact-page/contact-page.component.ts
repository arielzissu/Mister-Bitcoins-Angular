import { Component } from '@angular/core';
import { userService } from '../../services/user.service'
import { Contact } from 'src/app/models/contact-model';
import { User } from '../../models/user-model';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { ContactService } from '../../services/contact.service';
import { bitcoinService } from '../../services/bitcoins.service';

@Component({
  selector: 'contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent {
  filterBy = { term: '' };
  contacts: Contact[] = [];
  currContact: Contact = null;
  subscription: Subscription;
  priceInBTC: any;
  users: User[] = [];
  currUser: User = null;
  currPriceBTC: any;

  constructor(
      private userService: userService,
      private contactService: ContactService,
      private bitcoinsService: bitcoinService,
      private router: Router
      ) {

      this.subscription = this.contactService.contacts$.subscribe((contacts) => {
      this.contacts = [...contacts];      
      });

    this.subscription = this.userService.users$.subscribe((users) => {
      this.users = [...users];
    });
    this.priceInBTC = this.bitcoinsService.getRateBTC(100);
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onFiltering(filterBy){
    this.filterBy = filterBy;
    this.contactService.loadContacts(this.filterBy);
  }
  
  onAdd(){
    this.router.navigateByUrl('/contact/edit/id');
  }
}
