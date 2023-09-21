import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AboutCollegeComponent } from './about-college.component';

describe('AboutCollegeComponent', () => {
  let component: AboutCollegeComponent;
  let fixture: ComponentFixture<AboutCollegeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutCollegeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutCollegeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
