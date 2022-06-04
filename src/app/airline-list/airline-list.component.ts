import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Airline } from '../Entities/airline';
import { AirlineService } from '../Services/airline.service';

@Component({
  selector: 'app-airline-list',
  templateUrl: './airline-list.component.html',
  styleUrls: ['./airline-list.component.css']
})
export class AirlineListComponent implements OnInit {

  airlines: Airline[];
  constructor(private airlineSevice: AirlineService,
    private router: Router) { }

  ngOnInit(): void {
    this.getAirlines();
  }

  private getAirlines() {
    this.airlineSevice.getAllAirlines().subscribe(data => {
      this.airlines = data;
    }
    );
  }

  updateAirline(id: number) {
    this.router.navigate(['update-airline', id]);
  }

  deleteAirline(id: number) {
    this.airlineSevice.deleteAirlineById(id).subscribe(data => {
      console.log(data);
      this.getAirlines();
    }, error => { console.log(error) });
  }

  viewAirline(id: number) {
    this.router.navigate(['view-airline', id]);
  }

}
