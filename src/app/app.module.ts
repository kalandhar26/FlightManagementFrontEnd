import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'

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
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginPageComponent } from './login-page/login-page.component';
import { LoginNavbarComponent } from './login-navbar/login-navbar.component';
import { SearchFlightsComponent } from './search-flights/search-flights.component';

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
    ViewScheduleComponent,
    NavBarComponent,
    FooterComponent,
    LoginPageComponent,
    LoginNavbarComponent,
    SearchFlightsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
