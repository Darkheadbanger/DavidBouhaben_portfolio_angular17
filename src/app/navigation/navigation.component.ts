import { Component, Input } from '@angular/core';
import { DarkmodeComponent } from '../darkmode/darkmode.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navigation',
  standalone: true,
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss',
  imports: [DarkmodeComponent, CommonModule],
})
export class NavigationComponent {
  @Input() styleType!: string;
}
