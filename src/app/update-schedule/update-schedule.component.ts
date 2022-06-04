import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Schedule } from '../Entities/schedule';
import { ScheduleService } from '../Services/schedule.service';

@Component({
  selector: 'app-update-schedule',
  templateUrl: './update-schedule.component.html',
  styleUrls: ['./update-schedule.component.css']
})
export class UpdateScheduleComponent implements OnInit {

  id: number;
  schedule: Schedule = new Schedule();

  constructor(private scheduleService: ScheduleService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];
    this.scheduleService.getScheduleById(this.id).subscribe(data => {
      this.schedule = data;;
    }, error => console.log(error));
  }

  onSubmit() {
    this.scheduleService.updateSchedule(this.schedule, this.id).subscribe(
      data => {
        console.log(this.schedule);
        this.goToFlights();
      }, error => console.log(error));
  }

  goToFlights() {
    this.router.navigate(['/schedules']);
  }

}
