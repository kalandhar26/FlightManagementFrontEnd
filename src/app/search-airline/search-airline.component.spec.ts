import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchAirlineComponent } from './search-airline.component';

describe('SearchAirlineComponent', () => {
  let component: SearchAirlineComponent;
  let fixture: ComponentFixture<SearchAirlineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchAirlineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchAirlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
