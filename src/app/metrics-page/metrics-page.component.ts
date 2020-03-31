
import { Component, OnInit } from '@angular/core';
import { Apollo, QueryRef } from 'apollo-angular';
import gql from 'graphql-tag';

const USERS_QUERY = gql`
  query {
    players {
        PlayerName,
        Time,
        LoggedIn,
        PlayerKilled,
        Advancement,
        BlockType,
        BlocksMined,
        MobsKilled,
        PlayersKilled,
        Trades,
        TripsToNether,
        AnimalsBred,
    }
  }
`;

@Component({
  selector: 'app-metrics-page',
  templateUrl: './metrics-page.component.html',
  styleUrls: ['./metrics-page.component.scss']
})
export class MetricsPageComponent implements OnInit {

  players: any[] = []; //If done correctly this will hold database info

  private query: QueryRef<any>;

  constructor(private apollo: Apollo) {}

  ngOnInit() {
    this.query = this.apollo.watchQuery({
      query: USERS_QUERY,
      variables: {}
    });

    this.query.valueChanges.subscribe(result => {
      this.players = result.data && result.data.players;
    });
  }

}
