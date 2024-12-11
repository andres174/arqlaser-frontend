import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppFooterUserComponent } from './app-footer-user.component';

describe('AppFooterUserComponent', () => {
  let component: AppFooterUserComponent;
  let fixture: ComponentFixture<AppFooterUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppFooterUserComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppFooterUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
