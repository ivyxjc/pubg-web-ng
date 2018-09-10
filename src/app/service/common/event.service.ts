import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class EventService {

    fromEvent(nameInput: HTMLInputElement, eventName: string) {
        return new Observable((observer) => {
            const handler = (e) => observer.next(e);
            nameInput.addEventListener(eventName, handler);
            return () => {
                nameInput.removeEventListener(eventName, handler);
            };
        });
    }
}



