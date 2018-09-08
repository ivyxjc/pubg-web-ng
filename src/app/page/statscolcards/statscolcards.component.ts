import {Component, OnInit} from '@angular/core';
import {PlayerService} from '../../service/http/player.service';

@Component({
    selector: 'app-statscolcards',
    templateUrl: './statscolcards.component.html',
    styleUrls: ['./statscolcards.component.css']
})
export class StatscolcardsComponent implements OnInit {
    statsData: IStats = <IStats>{};

    constructor(private playerService: PlayerService) {
    }

    ngOnInit() {
        this.getPlayerData();
    }

    getPlayerData() {
        console.log('hello');
        return this.playerService.getPlayerSeasonStats().subscribe(
            data => this.statsData = {
                soloStats: data['data']['attributes']['gameModeStats']['solo'],
                duoStats: data['data']['attributes']['gameModeStats']['duo'],
                squadStats: data['data']['attributes']['gameModeStats']['squad'],
                soloFppStats: data['data']['attributes']['gameModeStats']['solo-fpp'],
                duoFppStats: data['data']['attributes']['gameModeStats']['duo-fpp'],
                squadFppStats: data['data']['attributes']['gameModeStats']['squad-fpp'],
            });
    }
}
