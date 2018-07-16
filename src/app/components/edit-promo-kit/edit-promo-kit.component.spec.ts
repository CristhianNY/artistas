import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPromoKitComponent } from './edit-promo-kit.component';

describe('EditPromoKitComponent', () => {
  let component: EditPromoKitComponent;
  let fixture: ComponentFixture<EditPromoKitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditPromoKitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPromoKitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
