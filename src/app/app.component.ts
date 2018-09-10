import {Component, OnInit} from '@angular/core';
import {PlayerService} from './service/http/player.service';
import {EventService} from './service/common/event.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'pubg-web-ng';
    value = 'shroud';
    ENTER_KEY = 13;
    ESC_KEY = 27;
    private playernameInput;

    constructor(private playerService: PlayerService, private eventService: EventService) {
    }

    ngOnInit(): void {
        this.playernameInput = document.getElementById('input-playername') as HTMLInputElement;
        this.eventService.fromEvent(this.playernameInput, 'keydown')
            .subscribe((e: KeyboardEvent) => {
                if (e.keyCode === this.ENTER_KEY) {
                    this.queryPlayer(this.value);
                }
                if (e.keyCode === this.ESC_KEY) {
                    this.value = '';
                }
            });
    }

    queryPlayer(playername: string) {
        this.playerService.getPlayerId(playername);
    }

}
