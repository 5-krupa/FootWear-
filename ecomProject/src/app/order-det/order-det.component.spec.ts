import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderDetComponent } from './order-det.component';

describe('OrderDetComponent', () => {
  let component: OrderDetComponent;
  let fixture: ComponentFixture<OrderDetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderDetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderDetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
