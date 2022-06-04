import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AirlineListComponent } from './airline-list/airline-list.component';
import { HttpClientModule } from '@angular/common/http';
import { AddAirlineComponent } from './add-airline/add-airline.component'
import { FormsModule } from '@angular/forms';
import { UpdateAirlineComponent } from './update-airline/update-airline.component';
import { ViewAirlineComponent } from './view-airline/view-airline.component';
import { FlightListComponent } from './flight-list/flight-list.component';
import { AddFlightComponent } from './add-flight/add-flight.component';
import { ViewFlightComponent } from './view-flight/view-flight.component';
import { UpdateFlightComponent } from './update-flight/update-flight.component';
import { AddScheduleComponent } from './add-schedule/add-schedule.component';
import { ScheduleListComponent } from './schedule-list/schedule-list.component';
import { UpdateScheduleComponent } from './update-schedule/update-schedule.component';
import { ViewScheduleComponent } from './view-schedule/view-schedule.component';

@NgModule({
  declarations: [
    AppComponent,
    AirlineListComponent,
    AddAirlineComponent,
    UpdateAirlineComponent,
    ViewAirlineComponent,
    FlightListComponent,
    AddFlightComponent,
    ViewFlightComponent,
    UpdateFlightComponent,
    AddScheduleComponent,
    ScheduleListComponent,
    UpdateScheduleComponent,
    ViewScheduleComponent
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
