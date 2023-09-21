import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AdmissionDetailsComponent } from './admission-details.component';

describe('AdmissionDetailsComponent', () => {
  let component: AdmissionDetailsComponent;
  let fixture: ComponentFixture<AdmissionDetailsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmissionDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmissionDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
