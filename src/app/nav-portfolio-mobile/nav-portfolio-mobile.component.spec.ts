import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavPortfolioMobileComponent } from './nav-portfolio-mobile.component';

describe('NavPortfolioComponent', () => {
  let component: NavPortfolioMobileComponent;
  let fixture: ComponentFixture<NavPortfolioMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavPortfolioMobileComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavPortfolioMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
