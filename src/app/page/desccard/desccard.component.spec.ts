import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DesccardComponent} from './desccard.component';

describe('DesccardComponent', () => {
    let component: DesccardComponent;
    let fixture: ComponentFixture<DesccardComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [DesccardComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(DesccardComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
