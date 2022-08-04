import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EventBindComponent } from './eventbind/eventbind.component';
import { FirstComponent } from './first/first.component';
import { InlineComponent } from './inline/inline.component';
import { PropertyBindComponent } from './propertybind/propertybind.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    InlineComponent,
    PropertyBindComponent,
    EventBindComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
