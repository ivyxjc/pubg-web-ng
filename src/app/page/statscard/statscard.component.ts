import {Component, OnInit} from '@angular/core';
import {PlayerService} from '../../service/http/player.service';

@Component({
    selector: 'app-statscard',
    templateUrl: './statscard.component.html',
    styleUrls: ['./statscard.component.css']
})
export class StatscardComponent implements OnInit {
    playerModeStats: IGameModeStats;

    constructor(private playerService: PlayerService) {
    }

    ngOnInit() {
        this.playerModeStats = <IGameModeStats>{};
        this.playerModeStats.isEmpty = function () {
            return true;
        };
    }

    getPlayerData() {
        return this.playerService.getPlayerSeasonStats().subscribe(
            data => {
                this.playerModeStats = data['data']['attributes']['gameModeStats']['duo'];
                this.playerModeStats.isEmpty = function () {
                    for (const key of Object.keys(this)) {
                        if (typeof(this[key]) !== 'function' && this[key] !== 0) {
                            return false;
                        }
                    }
                    return true;
                };
            }
        );
    }

    isEmpty(): boolean {
        return (typeof (this.playerModeStats.isEmpty)) === 'undefined' || this.playerModeStats.isEmpty();
    }

}
