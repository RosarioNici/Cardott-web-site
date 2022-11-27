import { Component } from '@angular/core';
import { icons } from './data.main';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
dataIcons = icons
}
