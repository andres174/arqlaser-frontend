import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppLayoutUserComponent } from './app-layout-user.component';

describe('AppLayoutUserComponent', () => {
  let component: AppLayoutUserComponent;
  let fixture: ComponentFixture<AppLayoutUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppLayoutUserComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppLayoutUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
