import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildCCComponent } from './child-cc.component';

describe('ChildCCComponent', () => {
  let component: ChildCCComponent;
  let fixture: ComponentFixture<ChildCCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildCCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildCCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
