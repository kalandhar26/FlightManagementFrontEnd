import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Airline } from '../Entities/airline';
import { AirlineService } from '../Services/airline.service';

@Component({
  selector: 'app-update-airline',
  templateUrl: './update-airline.component.html',
  styleUrls: ['./update-airline.component.css']
})
export class UpdateAirlineComponent implements OnInit {

  id: number;
  airline: Airline = new Airline();

  constructor(private airlineService: AirlineService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.airlineService.getAirlineById(this.id).subscribe(data => {
      this.airline = data;
    }, error => console.log(error));
  }


  onSubmit() {
    this.airlineService.updateAirline(this.airline, this.id).subscribe(
      data => {
        console.log(this.airline);
        this.goToAirlines();
      }, error => console.log(error));
  }

  goToAirlines() {
    this.router.navigate(['/airlines']);
  }
}
