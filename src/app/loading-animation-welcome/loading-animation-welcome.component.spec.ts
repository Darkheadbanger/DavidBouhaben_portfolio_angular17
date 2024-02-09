import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingAnimationWelcomeComponent } from './loading-animation-welcome.component';

describe('LoadingAnimationWelcomeComponent', () => {
  let component: LoadingAnimationWelcomeComponent;
  let fixture: ComponentFixture<LoadingAnimationWelcomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoadingAnimationWelcomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoadingAnimationWelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
