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

}
