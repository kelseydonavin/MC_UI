import { Component, OnInit } from '@angular/core';
import { Apollo, QueryRef } from 'apollo-angular';
import gql from 'graphql-tag';

const USERS_QUERY = gql`
  query {
    users {
      fullName,
      email,
      location,
      age,
      citizen,
    }
  }
`;

@Component({
  selector: 'app-example-users',
  templateUrl: './example-users.component.html',
  styleUrls: ['./example-users.component.scss']
})
export class ExampleUsersComponent implements OnInit {

  users: any[] = []; //If done correctly this will hold database info

  private query: QueryRef<any>;

  constructor(private apollo: Apollo) {}

  ngOnInit() {
    this.query = this.apollo.watchQuery({
      query: USERS_QUERY,
      variables: {}
    });

    this.query.valueChanges.subscribe(result => {
      this.users = result.data && result.data.users;
    });
  }

}
