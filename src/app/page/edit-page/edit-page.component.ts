import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.scss']
})
export class EditPageComponent implements OnInit {
  currContact: any;
  contact ={name:'', email:'', phone:''};
  constructor(
    private route: ActivatedRoute,
    private contactService: ContactService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const contactId = params['id'];
       this.currContact = this.contactService.getContact(contactId)
    })
  }

  saveContact(){
    this.contactService.getContact(this.currContact)
    this.router.navigateByUrl('/contact');
  }
  
  addContact(){
    this.contactService.addContact(this.contact)
    this.router.navigateByUrl('/contact');
  }

  onDelete(){
    this.contactService.deleteContact(this.currContact.id)
  }

}
