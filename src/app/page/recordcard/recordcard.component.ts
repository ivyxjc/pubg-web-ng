import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-recordcard',
    templateUrl: './recordcard.component.html',
    styleUrls: ['./recordcard.component.css']
})
export class RecordcardComponent implements OnInit {
    winNum = 5;
    top10Num = 6;
    loseNum = 9;

    constructor() {
    }

    ngOnInit() {
    }

}
