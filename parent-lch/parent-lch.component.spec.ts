import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentLCHComponent } from './parent-lch.component';

describe('ParentLCHComponent', () => {
  let component: ParentLCHComponent;
  let fixture: ComponentFixture<ParentLCHComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentLCHComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentLCHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
