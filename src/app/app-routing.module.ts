import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAirlineComponent } from './add-airline/add-airline.component';
import { AirlineListComponent } from './airline-list/airline-list.component';
import { SearchAirlineComponent } from './search-airline/search-airline.component';
import { UpdateAirlineComponent } from './update-airline/update-airline.component';

const routes: Routes = [
  { path: "airlines", component: AirlineListComponent },
  { path: "", redirectTo: 'airlines', pathMatch: 'full' },
  { path: "create-airline", component: AddAirlineComponent },
  { path: "update-airline/:id", component: UpdateAirlineComponent },
  { path: "view-airline/:id", component: SearchAirlineComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
