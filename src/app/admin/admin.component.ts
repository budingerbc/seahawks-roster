import { Component, OnInit } from '@angular/core';
import { Player } from '../player.model';
import { RosterService } from '../roster.service';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [RosterService]
})
export class AdminComponent implements OnInit {

  constructor(private rosterService: RosterService) { }

  ngOnInit() {
  }

  submitNewPlayerForm(first: string, last: string, jerseyNumber: number, position: string) {
    const newPlayer = new Player(first, last, +jerseyNumber, position);
    this.rosterService.addPlayer(newPlayer);
  }

}
