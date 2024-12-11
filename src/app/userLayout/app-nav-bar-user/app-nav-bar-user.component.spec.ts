import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppNavBarUserComponent } from './app-nav-bar-user.component';

describe('AppNavBarUserComponent', () => {
  let component: AppNavBarUserComponent;
  let fixture: ComponentFixture<AppNavBarUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppNavBarUserComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppNavBarUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
