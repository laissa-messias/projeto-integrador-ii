import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestInsertComponent } from './request-insert.component';

describe('RequestInsertComponent', () => {
  let component: RequestInsertComponent;
  let fixture: ComponentFixture<RequestInsertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RequestInsertComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequestInsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
