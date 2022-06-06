import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAirlineComponent } from './add-airline/add-airline.component';
import { AddFlightComponent } from './add-flight/add-flight.component';
import { AddScheduleComponent } from './add-schedule/add-schedule.component';
import { AirlineListComponent } from './airline-list/airline-list.component';
import { FlightListComponent } from './flight-list/flight-list.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ScheduleListComponent } from './schedule-list/schedule-list.component';
import { AuthGuard } from './Services/auth.guard';
import { UpdateAirlineComponent } from './update-airline/update-airline.component';
import { UpdateFlightComponent } from './update-flight/update-flight.component';
import { UpdateScheduleComponent } from './update-schedule/update-schedule.component';
import { ViewAirlineComponent } from './view-airline/view-airline.component';
import { ViewFlightComponent } from './view-flight/view-flight.component';
import { ViewScheduleComponent } from './view-schedule/view-schedule.component';

const routes: Routes = [
  { path: "airlines", component: AirlineListComponent, canActivate: [AuthGuard] },
  { path: "", redirectTo: 'login', pathMatch: 'full' },
  { path: "create-airline", component: AddAirlineComponent, canActivate: [AuthGuard] },
  { path: "update-airline/:id", component: UpdateAirlineComponent, canActivate: [AuthGuard] },
  { path: "view-airline/:id", component: ViewAirlineComponent, canActivate: [AuthGuard] },
  { path: "flights", component: FlightListComponent, canActivate: [AuthGuard] },
  { path: "add-flight", component: AddFlightComponent, canActivate: [AuthGuard] },
  { path: "update-flight/:id", component: UpdateFlightComponent, canActivate: [AuthGuard] },
  { path: "view-flight/:id", component: ViewFlightComponent, canActivate: [AuthGuard] },
  { path: "schedules", component: ScheduleListComponent, canActivate: [AuthGuard] },
  { path: "add-schedule", component: AddScheduleComponent, canActivate: [AuthGuard] },
  { path: "update-schedule/:id", component: UpdateScheduleComponent, canActivate: [AuthGuard] },
  { path: "view-schedule/:id", component: ViewScheduleComponent, canActivate: [AuthGuard] },
  { path: "login", component: LoginPageComponent },
  { path: "adminhome", component: NavBarComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
