import { Component } from '@angular/core';
import { DarkmodeComponent } from "../darkmode/darkmode.component";

@Component({
    selector: 'app-nav-portfolio-mobile',
    standalone: true,
    templateUrl: './nav-portfolio-mobile.component.html',
    styleUrl: './nav-portfolio-mobile.component.scss',
    imports: [DarkmodeComponent]
})
export class NavPortfolioMobileComponent {

}
