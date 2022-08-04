import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DirectiveComponent } from './basic/directive/directive.component';
import { EventBindComponent } from './basic/eventbind/eventbind.component';
import { FirstComponent } from './basic/first/first.component';
import { InlineComponent } from './basic/inline/inline.component';
import { ngForComponent } from './basic/ngfor/ngfor.component';
import { PropertyBindComponent } from './basic/propertybind/propertybind.component';
import { TwoWayBindingComponent } from './basic/twoway/twoway.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    InlineComponent,
    PropertyBindComponent,
    EventBindComponent,
    TwoWayBindingComponent,
    DirectiveComponent,
    ngForComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
