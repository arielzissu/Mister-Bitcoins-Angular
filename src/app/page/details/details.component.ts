import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  currContact: any;
  currPriceBTC: any;

  constructor( 
    private route: ActivatedRoute, 
    private contactService: ContactService, 
    public router:Router
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
        const userId = params['id'];
        this.currContact = this.contactService.getContact(userId)
    }); 
  }
  onEdit(){
    this.router.navigate(['/contact/edit', this.currContact.id]);
  }
}
