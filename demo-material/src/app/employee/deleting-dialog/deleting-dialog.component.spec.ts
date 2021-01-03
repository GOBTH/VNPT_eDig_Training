import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletingDialogComponent } from './deleting-dialog.component';

describe('DeletingDialogComponent', () => {
  let component: DeletingDialogComponent;
  let fixture: ComponentFixture<DeletingDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletingDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletingDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
