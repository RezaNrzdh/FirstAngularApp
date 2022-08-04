import {Component} from '@angular/core';

@Component({
    selector: 'app-propbind',
    templateUrl: './propertybind.component.html',
    styleUrls: ['./propertybind.component.css']
})
export class PropertyBindComponent {
    platformName: string = 'Angular';
    currentJobTitle: string = 'React developer';
    month: number = 3;
    futureJobTitle: string = 'Angular developer';
}