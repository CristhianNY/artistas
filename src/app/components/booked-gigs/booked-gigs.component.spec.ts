import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookedGigsComponent } from './booked-gigs.component';

describe('BookedGigsComponent', () => {
  let component: BookedGigsComponent;
  let fixture: ComponentFixture<BookedGigsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookedGigsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookedGigsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
