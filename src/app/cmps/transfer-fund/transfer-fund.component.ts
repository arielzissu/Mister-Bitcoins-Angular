import { Component, OnInit, Input } from '@angular/core';
import { userService } from 'src/app/services/user.service';

@Component({
  selector: 'transfer-fund',
  templateUrl: './transfer-fund.component.html',
  styleUrls: ['./transfer-fund.component.scss']
})
export class TransferFundComponent implements OnInit {
  @Input() currContact: any;

  amount:any;

  constructor(private userService: userService) { }

  ngOnInit(): void {
  }

  onTransfer(){
    this.userService.addMove(this.currContact, this.amount);
    this.amount = '';
  }
}
