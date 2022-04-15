import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgforfetchComponent } from './ngforfetch.component';

describe('NgforfetchComponent', () => {
  let component: NgforfetchComponent;
  let fixture: ComponentFixture<NgforfetchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgforfetchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgforfetchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
