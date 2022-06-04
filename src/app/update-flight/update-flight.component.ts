import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Flight } from '../Entities/flight';
import { FlightService } from '../Services/flight.service';

@Component({
  selector: 'app-update-flight',
  templateUrl: './update-flight.component.html',
  styleUrls: ['./update-flight.component.css']
})
export class UpdateFlightComponent implements OnInit {

  id: number;
  flight: Flight = new Flight();

  constructor(private flightService: FlightService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.flightService.getFlightById(this.id).subscribe(data => {
      this.flight = data;
    }, error => console.log(error));
  }

  onSubmit() {
    this.flightService.updateFlight(this.flight, this.id).subscribe(
      data => {
        console.log(this.flight);
        this.goToFlights();
      }, error => console.log(error));
  }

  goToFlights() {
    this.router.navigate(['/flights']);
  }


}
