import { Component, OnInit } from '@angular/core';
import { Player } from '../player.model';
import { Router } from '@angular/router';
import { RosterService } from '../roster.service';
import { FirebaseListObservable } from 'angularfire2/database';


@Component({
  selector: 'app-roster',
  templateUrl: './roster.component.html',
  styleUrls: ['./roster.component.css'],
  providers: [RosterService]
})
export class RosterComponent implements OnInit {
  roster: FirebaseListObservable<any[]>;

  constructor(private router: Router, private rosterService: RosterService) {}

  ngOnInit(){
    this.roster = this.rosterService.getRoster();
  }

  goToPlayerDetailPage(clickedPlayer: Player) {
    this.router.navigate(['roster'])
  }

}
