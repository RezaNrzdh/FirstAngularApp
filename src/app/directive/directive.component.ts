import { Component } from '@angular/core';

@Component({
    selector: 'app-directive',
    templateUrl: './directive.component.html',
    styleUrls: ['./directive.component.css']
})
export class DirectiveComponent {
    placeholder: string = 'Enter username...';
    username: string = '';
    loggedIn: boolean = false;

    onGetInput = (event: Event) => {
        this.loggedIn = false;
        this.username = (<HTMLInputElement>event.target).value;
    }

    onLoginClick = () => {
        this.loggedIn = true;
    }

}