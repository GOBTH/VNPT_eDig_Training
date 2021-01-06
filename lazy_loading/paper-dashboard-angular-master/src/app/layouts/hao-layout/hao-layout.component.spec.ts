import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HaoLayoutComponent } from './hao-layout.component';

describe('HaoLayoutComponent', () => {
  let component: HaoLayoutComponent;
  let fixture: ComponentFixture<HaoLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HaoLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HaoLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
