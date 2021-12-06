import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatabaseeditsComponent } from './databaseedits.component';

describe('DatabaseeditsComponent', () => {
  let component: DatabaseeditsComponent;
  let fixture: ComponentFixture<DatabaseeditsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatabaseeditsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatabaseeditsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
