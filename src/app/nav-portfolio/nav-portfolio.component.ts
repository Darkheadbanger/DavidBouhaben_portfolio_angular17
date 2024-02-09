import { Component } from '@angular/core';
import { DarkmodeComponent } from "../darkmode/darkmode.component";

@Component({
    selector: 'app-nav-portfolio',
    standalone: true,
    templateUrl: './nav-portfolio.component.html',
    styleUrl: './nav-portfolio.component.scss',
    imports: [DarkmodeComponent]
})
export class NavPortfolioComponent {

}
