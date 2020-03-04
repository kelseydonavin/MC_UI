import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import  gql  from 'graphql-tag';

@Component({
  selector: 'app-example-users',
  templateUrl: './example-users.component.html',
  styleUrls: ['./example-users.component.scss']
})
export class ExampleUsersComponent implements OnInit {
  users: any[];
  loading = true;
  error: any;
  constructor(private apollo: Apollo) { } // injecting into component

  ngOnInit() { // when page first loads up
    this.apollo.watchQuery({
      query: gql`
        {
          users {
          age
          citizen
          email
          fullName
          location	
        }
      }
      `
    }).valueChanges.subscribe(result=>{
      this.users = result.data && result.data.users,
      this.loading = result.loading,
      //this.error = result.error,
      console.log(this.users);
    })
  }

}
