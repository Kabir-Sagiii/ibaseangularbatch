import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentCCComponent } from './parent-cc.component';

describe('ParentCCComponent', () => {
  let component: ParentCCComponent;
  let fixture: ComponentFixture<ParentCCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentCCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentCCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
