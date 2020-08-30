import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { DatePipe } from './date.pipe';
import { NotFoundComponent } from './not-found/not-found.component';
import { HttpClientModule }from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    DatePipe,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
