import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {OverviewcardComponent} from './overviewcard.component';

describe('OverviewcardComponent', () => {
    let component: OverviewcardComponent;
    let fixture: ComponentFixture<OverviewcardComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [OverviewcardComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(OverviewcardComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
