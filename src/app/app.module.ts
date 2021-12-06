import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClickshowComponent } from './appcomponents/clickshow/clickshow.component';
import { ScheduleComponent } from './appcomponents/schedule/schedule.component';
import { ContactComponent } from './appcomponents/contact/contact.component';
import { LearningComponent } from './appcomponents/learning/learning.component';
import { SelectportalComponent } from './appcomponents/selectportal/selectportal.component';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DatabaseeditsComponent } from './appadmin/databaseedits/databaseedits.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    ClickshowComponent,
    ScheduleComponent,
    ContactComponent,
    LearningComponent,
    SelectportalComponent,
    DatabaseeditsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
