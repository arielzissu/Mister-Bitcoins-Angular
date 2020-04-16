import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isHomePage = true;
  onHomePage(){
    this.isHomePage = false;
  }
  onContactPage(){
    this.isHomePage = true;
  }
}
