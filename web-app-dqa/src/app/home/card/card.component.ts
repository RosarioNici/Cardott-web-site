import { Component } from '@angular/core';
import { licenze } from './data.product';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  data= licenze

}
