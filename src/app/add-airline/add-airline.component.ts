import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Airline } from '../Entities/airline';
import { AirlineService } from '../Services/airline.service';

@Component({
  selector: 'app-add-airline',
  templateUrl: './add-airline.component.html',
  styleUrls: ['./add-airline.component.css']
})
export class AddAirlineComponent implements OnInit {

  airline : Airline=new Airline();

  constructor( private airlineService:AirlineService, 
    private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.airline);
    this.saveAirline();
  }

  saveAirline(){
    this.airlineService.createAirline(this.airline).subscribe(data => {
      console.log(data);
      this.goToAirlines();
    }, error => console.log(error));
  }

  goToAirlines(){
    this.router.navigate(['/airlines']);
  }

}
