import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerDetailComponentComponent } from './customer-detail-component.component';

describe('CustomerDetailComponentComponent', () => {
  let component: CustomerDetailComponentComponent;
  let fixture: ComponentFixture<CustomerDetailComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomerDetailComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerDetailComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
