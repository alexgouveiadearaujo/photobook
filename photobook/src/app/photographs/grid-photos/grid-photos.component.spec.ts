import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridPhotosComponent } from './grid-photos.component';

describe('GridPhotosComponent', () => {
  let component: GridPhotosComponent;
  let fixture: ComponentFixture<GridPhotosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridPhotosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GridPhotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
