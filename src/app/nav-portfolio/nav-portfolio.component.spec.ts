import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavPortfolioComponent } from './nav-portfolio.component';

describe('NavPortfolioComponent', () => {
  let component: NavPortfolioComponent;
  let fixture: ComponentFixture<NavPortfolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavPortfolioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavPortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
