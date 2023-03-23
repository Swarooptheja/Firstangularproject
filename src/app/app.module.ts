import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaincomponentComponent } from './maincomponent/maincomponent.component';
import { HeaderComponent } from './header/header.component';
import { SecondcomponentComponent } from './secondcomponent/secondcomponent.component';
import { HttpClientModule } from '@angular/common/http';
import { FormcomponentComponent } from './formcomponent/formcomponent.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    MaincomponentComponent,
    HeaderComponent,
    SecondcomponentComponent,
    FormcomponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
