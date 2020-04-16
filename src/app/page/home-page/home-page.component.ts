import { Component, OnInit } from '@angular/core';
import { userService } from 'src/app/services/user.service';
import { bitcoinService } from 'src/app/services/bitcoins.service';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  currUser: any = null;
  currPriceBTC: any = null;

  constructor(private userService: userService, private bitcoinService: bitcoinService) { }

  ngOnInit(): void {
    this.currUser = this.userService.getUser(); 
    this.bitcoinService.getRateBTC(this.currUser[0].coins)
        .then((currBTCPrice) => {
          this.currPriceBTC = currBTCPrice
        })  
  }
}
