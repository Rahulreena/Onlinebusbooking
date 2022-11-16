import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintdetailsComponent } from './printdetails.component';

describe('PrintdetailsComponent', () => {
  let component: PrintdetailsComponent;
  let fixture: ComponentFixture<PrintdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrintdetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrintdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
