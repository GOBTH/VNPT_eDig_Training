import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdittingDialogComponent } from './editting-dialog.component';

describe('EdittingDialogComponent', () => {
  let component: EdittingDialogComponent;
  let fixture: ComponentFixture<EdittingDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdittingDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EdittingDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
