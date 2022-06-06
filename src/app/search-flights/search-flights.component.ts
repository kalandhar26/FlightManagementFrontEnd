import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Schedule } from '../Entities/schedule';
import { SearchCriteria } from '../Entities/searchcriteria';
import { SearchflightService } from '../Services/searchflight.service';

@Component({
  selector: 'app-search-flights',
  templateUrl: './search-flights.component.html',
  styleUrls: ['./search-flights.component.css']
})
export class SearchFlightsComponent implements OnInit {

  searchCriteria: SearchCriteria = new SearchCriteria();
  schedules: Schedule[];

  constructor(
    private router: Router,
    private searchFlightService: SearchflightService
  ) { }


  ngOnInit(): void {

  }

  onSubmit() {
    this.searchFlightService.getScheduleBySourceAndDestination(this.searchCriteria.sourceLocation, this.searchCriteria.destinationLocation).subscribe(data => {
      this.schedules = [...data];
    })
  }

  viewSchedule(id: number) {
    this.router.navigate(['view-schedule', id]);
  }

}
