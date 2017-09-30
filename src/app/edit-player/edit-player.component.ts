import { Component, Input, OnInit } from '@angular/core';
import { RosterService } from '../roster.service';


@Component({
  selector: 'app-edit-player',
  templateUrl: './edit-player.component.html',
  styleUrls: ['./edit-player.component.css'],
  providers: [RosterService]
})
export class EditPlayerComponent implements OnInit {
  @Input() selectedPlayer;
  disableEditForm = true;

  constructor(private rosterService: RosterService) { }

  ngOnInit() {
  }

  beginUpdatingPlayer(player) {
    this.rosterService.updatePlayer(player);
  }

  beginDeletingPlayer(player) {
    const confirmRemoval = "Remove " + player.firstName + " " + player.lastName + "?";
    if(confirm(confirmRemoval)) {
      this.rosterService.deletePlayer(player);
      this.disableEditForm = true;
      console.log(player.firstName);
    }

  }

}
