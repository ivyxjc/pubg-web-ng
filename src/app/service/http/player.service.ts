import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {EnvironmentService} from '../../environment';

@Injectable({
    providedIn: 'root'
})
export class PlayerService {
    httpOptions = {
        headers: new HttpHeaders()
    };
    private playerSeasonStats = 'assets/test-data/playerSeasonsStats.json';
    private playerName = 'shroud';
    private playerId = '';
    private playerSeasonUrl = `https://api.pubg.com/shards/pc-as/players/#playerId/seasons/`;
    private playerIdUrl = `https://api.pubg.com/shards/pc-as/players?filter[playerNames]=#playerName`;

    constructor(private http: HttpClient, private envService: EnvironmentService) {
        this.http.get('assets/private.json').subscribe(
            data => this.httpOptions = {
                headers: new HttpHeaders(<'string | { [name: string]: string | string[]'>data)
            }
        );
    }

    getPlayerSeasonStats(season: string) {
        const tmpUrl = this.playerSeasonUrl + this.envService.seasonIdMap[season];

        return this.http.get(tmpUrl, this.httpOptions);
    }

    getPlayerId(playerName: string) {
        this.playerName = playerName;
        this.playerIdUrl = this.playerIdUrl.replace('#playerName', playerName);
        this.http.get(this.playerIdUrl, this.httpOptions).subscribe(data => {
                this.playerId = data['data'][0]['id'];
                this.playerSeasonUrl = this.playerSeasonUrl.replace('#playerId', this.playerId);
            },
            error => {
                alert('this player does not exist');
            });
    }

    getPlayerMatchDetail() {
        return this.http.get('assets/test-data/playerMatchDetail.json');
    }

}
