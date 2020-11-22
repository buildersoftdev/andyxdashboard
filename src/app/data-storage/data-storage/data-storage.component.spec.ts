import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataStorageComponent } from './data-storage.component';

describe('DataStorageComponent', () => {
  let component: DataStorageComponent;
  let fixture: ComponentFixture<DataStorageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataStorageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataStorageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
