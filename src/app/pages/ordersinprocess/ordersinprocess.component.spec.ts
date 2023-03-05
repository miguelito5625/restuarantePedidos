import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersinprocessComponent } from './ordersinprocess.component';

describe('OrdersinprocessComponent', () => {
  let component: OrdersinprocessComponent;
  let fixture: ComponentFixture<OrdersinprocessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdersinprocessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrdersinprocessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
