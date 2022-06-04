import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Flight } from '../Entities/flight';
import { FlightService } from '../Services/flight.service';

@Component({
  selector: 'app-add-flight',
  templateUrl: './add-flight.component.html',
  styleUrls: ['./add-flight.component.css']
})
export class AddFlightComponent implements OnInit {

  flight: Flight = new Flight();

  constructor(private flightService: FlightService,
    private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.flight);
    this.saveFlight();
  }

  saveFlight() {
    this.flightService.createFlight(this.flight).subscribe(data => {
      console.log(data);
      this.goToFlights();
    }, error => console.log(error));
  }

  goToFlights() {
    this.router.navigate(['/flights']);
  }



}
