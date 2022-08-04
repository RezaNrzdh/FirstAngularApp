import {Component} from '@angular/core';

@Component({
    selector: '[inline]',
    template: `
        <div>
            <h3>Inline Component</h3>
            <p>In this component I used inline attributes for component decorator.</p>
        </div>
    `,
    styles: [`
        div{
            display: flex;
            flex-direction: column;
            padding: 24px;
            box-sizing: border-box;
            background-color: bisque;
            border-radius: 16px;
            margin-bottom: 24px;
        }
    `]
})
export class InlineComponent {

}