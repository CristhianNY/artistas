import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GigLeadsComponent } from './gig-leads.component';

describe('GigLeadsComponent', () => {
  let component: GigLeadsComponent;
  let fixture: ComponentFixture<GigLeadsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GigLeadsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GigLeadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
