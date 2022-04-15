import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgswitchproductComponent } from './ngswitchproduct.component';

describe('NgswitchproductComponent', () => {
  let component: NgswitchproductComponent;
  let fixture: ComponentFixture<NgswitchproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgswitchproductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgswitchproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
