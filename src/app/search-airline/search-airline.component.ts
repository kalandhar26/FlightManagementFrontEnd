import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Airline } from '../Entities/airline';
import { AirlineService } from '../Services/airline.service';

@Component({
  selector: 'app-search-airline',
  templateUrl: './search-airline.component.html',
  styleUrls: ['./search-airline.component.css']
})
export class SearchAirlineComponent implements OnInit {

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
