import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
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
import { ContactComponent } from './pages/contact/contact.component';
import { AboutComponent } from './pages/about/about.component';
import { ProductComponent } from './pages/product/product.component';
import { CardComponent } from './pages/product/card/card.component';
import { ProfileComponent } from './profile/profile.component';
import { UserComponent } from './profile/user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    InlineComponent,
    PropertyBindComponent,
    EventBindComponent,
    TwoWayBindingComponent,
    DirectiveComponent,
    ngForComponent,
    ContactComponent,
    AboutComponent,
    ProductComponent,
    CardComponent,
    ProfileComponent,
    UserComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    RouterModule.forRoot([
      {path: 'about', component: AboutComponent},
      {path: 'contact', component: ContactComponent},
      {path: 'product', component: ProductComponent},
      {path: 'profile', component: ProfileComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
