import { Component, OnInit } from '@angular/core';
import { Apollo, QueryRef } from 'apollo-angular';
import gql from 'graphql-tag';
import { Router } from '@angular/router';

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
  selector: 'app-unique-metric-page',
  templateUrl: './unique-metric-page.component.html',
  styleUrls: ['./unique-metric-page.component.scss']
})
export class UniqueMetricPageComponent implements OnInit {

  players: any[] = [];

  private query: QueryRef<any>;

  constructor(private apollo: Apollo, private router: Router) {}

  ngOnInit() {
    console.log(this.router.url);
    this.query = this.apollo.watchQuery({
      query: USERS_QUERY,
      variables: {}
    });

    this.query.valueChanges.subscribe(result => {
      this.players = result.data && result.data.players;
    });
  }

  determineRoute() {
    if (this.router.url === '/metrics/blocks-mined') {
      return 'blocks-mined';
    }
    if (this.router.url === '/metrics/mobs-killed') {
      return 'mobs-killed';
    }
    if (this.router.url === '/metrics/players-killed') {
      return 'players-killed';
    }
    if (this.router.url === '/metrics/trades') {
      return 'trades';
    }
    if (this.router.url === '/metrics/times-reached-nether') {
      return 'times-reached-nether';
    }
    if (this.router.url === '/metrics/animals-bred') {
      return 'animals-bred';
    }
    return null;
  }

  sortByBlocksMined() {
    return this.players.sort((a, b) => b.BlocksMined - a.BlocksMined);
  }

  sortByMobsKilled() {
    return this.players.sort((a, b) => b.MobsKilled - a.MobsKilled);
  }

  sortByPlayersKilled() {
    return this.players.sort((a, b) => b.PlayersKilled - a.PlayersKilled);
  }

  sortByTrades() {
    return this.players.sort((a, b) => b.Trades - a.Trades);
  }

  sortByTripsToNether() {
    return this.players.sort((a, b) => b.TripsToNether - a.TripsToNether);
  }

  sortByAnimalsBred() {
    return this.players.sort((a, b) => b.AnimalsBred - a.AnimalsBred);
  }

}
