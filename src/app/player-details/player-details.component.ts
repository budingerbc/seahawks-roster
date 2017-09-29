import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Player } from '../player.model';
import { RosterService } from '../roster.service';

@Component({
  selector: 'app-player-details',
  templateUrl: './player-details.component.html',
  styleUrls: ['./player-details.component.css'],
  providers: [RosterService]
})
export class PlayerDetailsComponent implements OnInit {

  playerKey: string;
  playerToDisplay;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private rosterService: RosterService
  ) {}

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.playerKey = (urlParameters['key']);
    });
    this.playerToDisplay = this.rosterService.getPlayerByKey(this.playerKey);
  }

}
