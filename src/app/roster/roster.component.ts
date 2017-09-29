import { Component, OnInit } from '@angular/core';
import { Player } from '../player.model';
import { Router } from '@angular/router';
import { RosterService } from '../roster.service';
import { FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';


@Component({
  selector: 'app-roster',
  templateUrl: './roster.component.html',
  styleUrls: ['./roster.component.css'],
  providers: [RosterService]
})
export class RosterComponent implements OnInit {
  roster: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;
  showEditor = false;

  constructor(private router: Router, private rosterService: RosterService) {}

  ngOnInit(){
    this.roster = this.rosterService.getRoster();
  }

  goToPlayerDetailsPage(clickedPlayer) {
    this.router.navigate(['roster', clickedPlayer.$key]);
  }

  toggleEditor(value: number) {
    if (this.showEditor) {
      this.showEditor = false;
    } else {
      this.showEditor = true;
    }
    console.log(value);
  }

}
