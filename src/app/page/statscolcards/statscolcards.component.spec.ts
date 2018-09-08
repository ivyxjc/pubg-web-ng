import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {StatscolcardsComponent} from './statscolcards.component';

describe('StatscolcardsComponent', () => {
    let component: StatscolcardsComponent;
    let fixture: ComponentFixture<StatscolcardsComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [StatscolcardsComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(StatscolcardsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
