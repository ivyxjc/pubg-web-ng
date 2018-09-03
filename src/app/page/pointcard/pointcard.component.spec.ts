import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PointcardComponent} from './pointcard.component';

describe('PointcardComponent', () => {
    let component: PointcardComponent;
    let fixture: ComponentFixture<PointcardComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [PointcardComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PointcardComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
