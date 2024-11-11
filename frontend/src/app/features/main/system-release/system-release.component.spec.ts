import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemReleaseComponent } from './system-release.component';

describe('SystemReleaseComponent', () => {
  let component: SystemReleaseComponent;
  let fixture: ComponentFixture<SystemReleaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SystemReleaseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SystemReleaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
