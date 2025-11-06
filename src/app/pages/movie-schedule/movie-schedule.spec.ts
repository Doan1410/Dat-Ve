import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieSchedule } from './movie-schedule';

describe('MovieSchedule', () => {
  let component: MovieSchedule;
  let fixture: ComponentFixture<MovieSchedule>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MovieSchedule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovieSchedule);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
