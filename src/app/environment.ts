import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class EnvironmentService {
    seasonArray = ['第一季', '第二季', '第三季', '第四季',
        '第五季', '第六季', '第七季', '第八季', '第九季'];

    constructor() {
    }

}
