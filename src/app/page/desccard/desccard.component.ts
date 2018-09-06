import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-desccard',
    templateUrl: './desccard.component.html',
    styleUrls: ['./desccard.component.css']
})
export class DesccardComponent implements OnInit {
    @Input() time: number;
    @Input() winNum: number;
    @Input() top10Num: number;
    @Input() loseNum: number;

    constructor() {
    }

    ngOnInit() {
    }

}
