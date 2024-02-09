import { Component } from '@angular/core';
import { DarkmodeComponent } from "../darkmode/darkmode.component";
import { NavigationComponent } from "../navigation/navigation.component";

@Component({
    selector: 'app-nav-portfolio-mobile',
    standalone: true,
    templateUrl: './nav-portfolio-mobile.component.html',
    styleUrl: './nav-portfolio-mobile.component.scss',
    imports: [DarkmodeComponent, NavigationComponent]
})
export class NavPortfolioMobileComponent {

}
