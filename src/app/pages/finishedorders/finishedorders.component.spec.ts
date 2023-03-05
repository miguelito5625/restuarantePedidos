import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinishedordersComponent } from './finishedorders.component';

describe('FinishedordersComponent', () => {
  let component: FinishedordersComponent;
  let fixture: ComponentFixture<FinishedordersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinishedordersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinishedordersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
