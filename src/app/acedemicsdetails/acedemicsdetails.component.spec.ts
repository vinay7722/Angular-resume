import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcedemicsdetailsComponent } from './acedemicsdetails.component';

describe('AcedemicsdetailsComponent', () => {
  let component: AcedemicsdetailsComponent;
  let fixture: ComponentFixture<AcedemicsdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcedemicsdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcedemicsdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
