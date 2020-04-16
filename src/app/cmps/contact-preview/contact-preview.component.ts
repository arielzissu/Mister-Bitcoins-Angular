import { Component, OnInit, Input} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'contact-preview',
  templateUrl: './contact-preview.component.html',
  styleUrls: ['./contact-preview.component.scss']
})
export class ContactPreviewComponent implements OnInit {
  @Input() contact: any;
  constructor(public router:Router) { }

  ngOnInit(): void {
  }

  onDetails(userId){
    this.router.navigateByUrl(`/contact/${userId}`);
  }

}
