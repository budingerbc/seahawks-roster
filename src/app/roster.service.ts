import { Injectable } from '@angular/core';
import { Player } from './player.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class RosterService {
  roster: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.roster = database.list('roster');
  }

  getRoster() {
    return this.roster;
  }

  addPlayer(newPlayer: Player) {
    this.roster.push(newPlayer);
  }

  getPlayerByKey(key: string) {
    return this.database.object('roster/' + key);

  }

  updatePlayer(localPlayer) {
    const playerEntryInFirebase = this.getPlayerByKey(localPlayer.$key);
    playerEntryInFirebase.update({firstName: localPlayer.firstName,
                                  lastName: localPlayer.lastName,
                                  jerseyNumber: localPlayer.jerseyNumber,
                                  position: localPlayer.position});
  }

  deletePlayer(player) {
    const playerEntryInFirebase = this.getPlayerByKey(player.$key);
    playerEntryInFirebase.remove();
  }

}
