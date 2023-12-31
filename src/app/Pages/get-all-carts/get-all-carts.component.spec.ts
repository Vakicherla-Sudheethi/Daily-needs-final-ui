import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllCartsComponent } from './get-all-carts.component';

describe('GetAllCartsComponent', () => {
  let component: GetAllCartsComponent;
  let fixture: ComponentFixture<GetAllCartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetAllCartsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetAllCartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
