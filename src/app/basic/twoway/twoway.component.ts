import { Component } from '@angular/core';

@Component({
    selector: 'app-twowaybinding',
    templateUrl: './twoway.component.html',
    styleUrls: ['./twoway.component.css']
})
export class TwoWayBindingComponent {
    placeholder: string = 'Enter your name...';

    onChangePlaceholder = () => {
        this.placeholder = 'Enter your job...'
    }
}
