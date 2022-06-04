import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Flight } from '../Entities/flight';
import { FlightService } from '../Services/flight.service';

@Component({
  selector: 'app-flight-list',
  templateUrl: './flight-list.component.html',
  styleUrls: ['./flight-list.component.css']
})
export class FlightListComponent implements OnInit {

  flights: Flight[];

  constructor(private flightService: FlightService,
    private router: Router) { }

  ngOnInit(): void {
    this.viewAllFlights();
  }
  viewAllFlights() {
    this.flightService.getAllFlights().subscribe(data => {
      this.flights = data;
    });
  }
  updateFlight(id: number) {
    this.router.navigate(['update-flight', id]);
  }
  deleteFlight(id: number) {
    this.flightService.deleteFlightById(id).subscribe(data => {
      console.log(data);
      this.viewAllFlights();
    }, error => { console.log(error) });
  }

  viewFlight(id: number) {
    this.router.navigate(['view-flight', id]);
  }


}
