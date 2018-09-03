import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-statscard',
    templateUrl: './statscard.component.html',
    styleUrls: ['./statscard.component.css']
})
export class StatscardComponent implements OnInit {
    @Input() scPercent: number;
    @Input() scTitle: string;
    @Input() scValue: string;

    constructor() {
    }

    ngOnInit() {
    }

}
