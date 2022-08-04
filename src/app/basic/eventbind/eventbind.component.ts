import {Component} from '@angular/core';

@Component({
    selector: 'app-eventbind',
    templateUrl: './eventbind.component.html',
    styleUrls: ['./eventbind.component.css']
})
export class EventBindComponent {
    input: string = '';
    result: string = '';

    onGetInput = (event: Event) => {
        this.input = (<HTMLInputElement>event.target).value;
    }

    onShowResult = () => {
          this.result = this.input;
    }
}