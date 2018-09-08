import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {PlayerService} from '../../service/http/player.service';

@Component({
    selector: 'app-statscard',
    templateUrl: './statscard.component.html',
    styleUrls: ['./statscard.component.css']
})
export class StatscardComponent implements OnInit, OnChanges {
    @Input() scStatsData = <IGameModeStats>{};
    @Input() scNumber: number;
    numArray: Array<number> = new Array<number>(1);

    constructor(private playerService: PlayerService) {
    }

    ngOnInit() {
        console.log('onInit');
    }

    ngOnChanges() {
        this.numArray = new Array<number>(this.scNumber);
        if (typeof this.scStatsData === 'undefined') {
            this.scStatsData = <IGameModeStats>{};
        }
        this.scStatsData.isEmpty = function () {
            for (const key of Object.keys(this)) {
                if (typeof(this[key]) !== 'function' && this[key] !== 0) {
                    return false;
                }
            }
            return true;
        };
    }

    isEmpty(): boolean {
        return (typeof (this.scStatsData.isEmpty)) === 'undefined' || this.scStatsData.isEmpty();
    }

}
