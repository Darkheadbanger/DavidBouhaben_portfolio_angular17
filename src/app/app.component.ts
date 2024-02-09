import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoadingAnimationWelcomeComponent } from './loading-animation-welcome/loading-animation-welcome.component';
import { NavPortfolioMobileComponent } from './nav-portfolio-mobile/nav-portfolio-mobile.component';
import { NavPortfolioComponent } from "./nav-portfolio/nav-portfolio.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [
        RouterOutlet,
        LoadingAnimationWelcomeComponent,
        NavPortfolioMobileComponent,
        NavPortfolioComponent
    ]
})
export class AppComponent {
  title = 'davidBouhaben-portfolio';
}
