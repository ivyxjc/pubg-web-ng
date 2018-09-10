import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class EnvironmentService {
    seasonArray = ['第一季', '第二季', '第三季', '第四季',
        '第五季', '第六季', '第七季', '第八季', '第九季'];
    seasonIdMap = {
        // 'division.bro.official.2017-beta',
        // 'division.bro.official.2017-pre1',
        // 'division.bro.official.2017-pre2',
        // 'division.bro.official.2017-pre3',
        // 'division.bro.official.2017-pre4',
        // 'division.bro.official.2017-pre5',
        // 'division.bro.official.2017-pre6',
        // 'division.bro.official.2017-pre7',
        // 'division.bro.official.2017-pre8',
        // 'division.bro.official.2017-pre9',
        '第一季': 'division.bro.official.2018-01',
        '第二季': 'division.bro.official.2018-02',
        '第三季': 'division.bro.official.2019-03',
        '第四季': 'division.bro.official.2018-04',
        '第五季': 'division.bro.official.2018-05',
        '第六季': 'division.bro.official.2018-06',
        '第七季': 'division.bro.official.2018-07',
        '第八季': 'division.bro.official.2018-08',
        '第九季': 'division.bro.official.2018-09'
    };

    constructor() {
    }

}
