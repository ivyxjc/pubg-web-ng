import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PlayermatchesComponent} from './playermatches.component';

describe('PlayermatchesComponent', () => {
    let component: PlayermatchesComponent;
    let fixture: ComponentFixture<PlayermatchesComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [PlayermatchesComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PlayermatchesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
