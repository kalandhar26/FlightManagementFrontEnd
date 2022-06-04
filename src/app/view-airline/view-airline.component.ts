import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Airline } from '../Entities/airline';
import { AirlineService } from '../Services/airline.service';

@Component({
  selector: 'app-view-airline',
  templateUrl: './view-airline.component.html',
  styleUrls: ['./view-airline.component.css']
})
export class ViewAirlineComponent implements OnInit {

  id: number;
  airline: Airline;

  constructor(private route: ActivatedRoute,
    private airlineService: AirlineService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.airline = new Airline();
    this.airlineService.getAirlineById(this.id).subscribe(
      data => {
        this.airline = data;
      }
    )
  }

}
