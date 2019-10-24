import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-core',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  //constructor() { }
  constructor(private router: Router) { }

  ngOnInit() {
  }
    goToPage(pageName: string) {
      this.router.navigate([`${pageName}`]);
    }
  

}
