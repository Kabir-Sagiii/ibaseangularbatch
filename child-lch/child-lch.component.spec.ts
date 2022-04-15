import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildLCHComponent } from './child-lch.component';

describe('ChildLCHComponent', () => {
  let component: ChildLCHComponent;
  let fixture: ComponentFixture<ChildLCHComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildLCHComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildLCHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
