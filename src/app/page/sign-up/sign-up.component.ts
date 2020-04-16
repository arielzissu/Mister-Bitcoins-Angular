import { Component, OnInit } from '@angular/core';
import { userService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
 valInput: string;
  constructor(
    private userService: userService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  onSignUp(){
    this.userService.signUp(this.valInput);
    this.valInput = '';
    this.router.navigateByUrl('/');
  }
}
