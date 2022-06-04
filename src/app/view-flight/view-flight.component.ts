import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Flight } from '../Entities/flight';
import { FlightService } from '../Services/flight.service';

@Component({
  selector: 'app-view-flight',
  templateUrl: './view-flight.component.html',
  styleUrls: ['./view-flight.component.css']
})
export class ViewFlightComponent implements OnInit {

  id: number;
  flight: Flight;

  constructor(private flightService: FlightService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.flight = new Flight();
    this.flightService.getFlightById(this.id).subscribe(
      data => {
        this.flight = data;
      }
    )
  }

}
