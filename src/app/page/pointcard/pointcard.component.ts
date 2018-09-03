import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-pointcard',
    templateUrl: './pointcard.component.html',
    styleUrls: ['./pointcard.component.css']
})
export class PointcardComponent implements OnInit {
    @Input() ptTitle: string;
    @Input() ptPoints: number;
    @Input() ptPercent: number;

    constructor() {
    }

    ngOnInit() {
    }

}
