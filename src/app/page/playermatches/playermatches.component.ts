import {Component, OnChanges, OnInit} from '@angular/core';
import {PlayerService} from '../../service/http/player.service';

@Component({
    selector: 'app-playermatches',
    templateUrl: './playermatches.component.html',
    styleUrls: ['./playermatches.component.css']
})
export class PlayermatchesComponent implements OnInit, OnChanges {
    playerMatchDetail: IPlayerMatchDetail;
    playerMatches: IPlayerMatches;

    constructor(private playerService: PlayerService) {

    }

    ngOnInit() {
        this.getPlayerMatchDetail();
    }

    ngOnChanges() {
        if (typeof this.playerMatchDetail === 'undefined') {
            this.playerMatchDetail = <IPlayerMatchDetail>{};
        }
        this.getPlayerMatchDetail();
    }

    getPlayerMatchDetail() {
        this.playerService.getPlayerMatchDetail().subscribe(data => {
            this.playerMatchDetail = <IPlayerMatchDetail>data;
            this.playerMatches = {
                matches: Array.of(this.playerMatchDetail)
            };
        });

    }
}
