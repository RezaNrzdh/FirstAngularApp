import { Component } from '@angular/core';

@Component({
    selector: 'app-ngfor',
    templateUrl: './ngfor.component.html',
    styleUrls: ['./ngfor.component.css']
})
export class ngForComponent {
    countryName: Array<string> = [];
    value: string = '';

    onAddHandler = () => {
        this.countryName.push(this.value);
    }
}