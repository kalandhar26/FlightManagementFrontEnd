import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAirlineComponent } from './add-airline/add-airline.component';
import { AddFlightComponent } from './add-flight/add-flight.component';
import { AddScheduleComponent } from './add-schedule/add-schedule.component';
import { AirlineListComponent } from './airline-list/airline-list.component';
import { FlightListComponent } from './flight-list/flight-list.component';
import { ScheduleListComponent } from './schedule-list/schedule-list.component';
import { UpdateAirlineComponent } from './update-airline/update-airline.component';
import { UpdateFlightComponent } from './update-flight/update-flight.component';
import { UpdateScheduleComponent } from './update-schedule/update-schedule.component';
import { ViewAirlineComponent } from './view-airline/view-airline.component';
import { ViewFlightComponent } from './view-flight/view-flight.component';
import { ViewScheduleComponent } from './view-schedule/view-schedule.component';

const routes: Routes = [
  { path: "airlines", component: AirlineListComponent },
  { path: "", redirectTo: 'airlines', pathMatch: 'full' },
  { path: "create-airline", component: AddAirlineComponent },
  { path: "update-airline/:id", component: UpdateAirlineComponent },
  { path: "view-airline/:id", component: ViewAirlineComponent },
  { path: "flights", component: FlightListComponent },
  { path: "add-flight", component: AddFlightComponent },
  { path: "update-flight/:id", component: UpdateFlightComponent },
  { path: "view-flight/:id", component: ViewFlightComponent },
  { path: "schedules", component: ScheduleListComponent },
  { path: "add-schedule", component: AddScheduleComponent },
  { path: "update-schedule/:id", component: UpdateScheduleComponent },
  { path: "view-schedule/:id", component: ViewScheduleComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
