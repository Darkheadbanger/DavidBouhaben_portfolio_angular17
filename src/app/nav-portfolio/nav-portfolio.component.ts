import { Component } from '@angular/core';
import { DarkmodeComponent } from "../darkmode/darkmode.component";
import { HamburgerMenuComponent } from "../hamburger-menu/hamburger-menu.component";
import { NavigationComponent } from "../navigation/navigation.component";

@Component({
    selector: 'app-nav-portfolio',
    standalone: true,
    templateUrl: './nav-portfolio.component.html',
    styleUrl: './nav-portfolio.component.scss',
    imports: [DarkmodeComponent, HamburgerMenuComponent, NavigationComponent]
})
export class NavPortfolioComponent {

}
