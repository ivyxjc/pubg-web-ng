import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {PlayerService} from '../../service/http/player.service';

@Component({
    selector: 'app-statscard',
    templateUrl: './statscard.component.html',
    styleUrls: ['./statscard.component.css']
})
export class StatscardComponent implements OnInit, OnChanges {
    @Input() scStatsData = <IGameModeStats>{};

    constructor(private playerService: PlayerService) {
    }

    ngOnInit() {
        console.log('onInit');
    }

    ngOnChanges() {
        console.log('onchange');
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
