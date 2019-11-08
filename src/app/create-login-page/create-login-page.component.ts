import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-login-page',
  templateUrl: './create-login-page.component.html',
  styleUrls: ['./create-login-page.component.scss']
})
export class CreateLoginPageComponent implements OnInit {

  //constructor() { }
  constructor(private router: Router) { }

  ngOnInit() {
  }
  loginUser(event)
  {
    var password = event.target.elements[0].value;
    if(password == 'hurl')
    {
      this.router.navigate(['create']);
    }
    else{
      this.router.navigate(['create-login']);
    }
  }
    goToPage(pageName: string) {
      this.router.navigate([`${pageName}`]);
    }

}


