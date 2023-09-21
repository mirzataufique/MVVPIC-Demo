import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FltreportComponent } from './fltreport.component';

describe('FltreportComponent', () => {
  let component: FltreportComponent;
  let fixture: ComponentFixture<FltreportComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FltreportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FltreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
