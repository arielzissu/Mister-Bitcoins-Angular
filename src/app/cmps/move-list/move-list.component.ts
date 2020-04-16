import { Component, OnInit, Input } from '@angular/core';
import { userService } from 'src/app/services/user.service';

@Component({
  selector: 'move-list',
  templateUrl: './move-list.component.html',
  styleUrls: ['./move-list.component.scss']
})
export class MoveListComponent implements OnInit {
  @Input() currContact:any = null;
  currUser:any = null;
  currMoves:Array<any> = null;
  currMovesSlices:Array<any> = null;
  constructor( private userService: userService) { }

  ngOnInit(): void {
    this.currUser = this.userService.getUser();
    const moves = this.currUser[0].moves;
    this.currMoves = moves.filter(move => move.toId === this.currContact.id);
    if(moves.length > 3){
      this.currMovesSlices = moves.slice(moves.length-3,moves.length);
    } else {
      this.currMovesSlices = moves;
    }
  }
}
