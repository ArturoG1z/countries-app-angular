import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ByRegionComponent } from './by-region.component';

describe('ByRegionComponent', () => {
  let component: ByRegionComponent;
  let fixture: ComponentFixture<ByRegionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ByRegionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ByRegionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
