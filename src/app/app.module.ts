import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DirectiveComponent } from './directive/directive.component';
import { EventBindComponent } from './eventbind/eventbind.component';
import { FirstComponent } from './first/first.component';
import { InlineComponent } from './inline/inline.component';
import { PropertyBindComponent } from './propertybind/propertybind.component';
import { TwoWayBindingComponent } from './twoway/twoway.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    InlineComponent,
    PropertyBindComponent,
    EventBindComponent,
    TwoWayBindingComponent,
    DirectiveComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
