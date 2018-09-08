import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class PlayerService {

    private playerSeasonStats = 'assets/test-data/playerSeasonsStats.json';

    constructor(private http: HttpClient) {
    }

    getPlayerSeasonStats() {
        return this.http.get(this.playerSeasonStats);
    }
}
