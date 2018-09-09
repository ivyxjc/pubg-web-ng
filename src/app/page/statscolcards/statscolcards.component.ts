import {Component, OnInit} from '@angular/core';
import {PlayerService} from '../../service/http/player.service';
import {EnvironmentService} from '../../environment';

@Component({
    selector: 'app-statscolcards',
    templateUrl: './statscolcards.component.html',
    styleUrls: ['./statscolcards.component.css']
})
export class StatscolcardsComponent implements OnInit {
    statsData: IStats = <IStats>{};
    isFpp: boolean;
    season: string;

    constructor(private playerService: PlayerService, public environmentService: EnvironmentService) {
        this.season = this.environmentService.seasonArray[this.environmentService.seasonArray.length - 1];
    }

    ngOnInit() {
        this.getPlayerData(this.season);
    }

    getPlayerData(seasonNum: string) {
        console.log('hello');
        return this.playerService.getPlayerSeasonStats('', seasonNum).subscribe(
            data => this.statsData = {
                soloStats: data['data']['attributes']['gameModeStats']['solo'],
                duoStats: data['data']['attributes']['gameModeStats']['duo'],
                squadStats: data['data']['attributes']['gameModeStats']['squad'],
                soloFppStats: data['data']['attributes']['gameModeStats']['solo-fpp'],
                duoFppStats: data['data']['attributes']['gameModeStats']['duo-fpp'],
                squadFppStats: data['data']['attributes']['gameModeStats']['squad-fpp'],
            });
    }

    seasonChange(str: string) {
        this.season = str;
        this.getPlayerData(str);
    }
}
