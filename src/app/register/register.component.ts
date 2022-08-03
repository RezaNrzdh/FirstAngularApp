import {Component} from '@angular/core';

@Component({
    selector: 'app-register',
    template: `
        <h1>Register Component</h1>
        <h3>My name is {{ myName }}</h3>
        `,
})
export class RegisterComponent {
    myName: string = 'Reza Norouzzadeh'
}