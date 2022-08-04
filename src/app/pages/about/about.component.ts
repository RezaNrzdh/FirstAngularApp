import { Component } from '@angular/core';
import { About } from './about.model';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  colleague: Array<About> = [
    new About('Reza Norouzzadeh', 'UIUX desginer & Web developer'),
    new About('Mobina Khshnood', 'UIUX Designer'),
    {name: 'test', job: 'test' }
  ];

}
