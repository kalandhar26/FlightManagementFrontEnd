import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Schedule } from '../Entities/schedule';
import { ScheduleService } from '../Services/schedule.service';

@Component({
  selector: 'app-add-schedule',
  templateUrl: './add-schedule.component.html',
  styleUrls: ['./add-schedule.component.css']
})
export class AddScheduleComponent implements OnInit {

  schedule: Schedule = new Schedule();

  constructor(private scheduleService: ScheduleService,
    private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.schedule);
    this.saveSchedule();
  }

  saveSchedule() {
    this.scheduleService.addSchedule(this.schedule).subscribe(data => {
      console.log(data);
      this.goToSchedules();
    }, error => console.log(error));
  }

  goToSchedules() {
    this.router.navigate(['/schedules']);
  }

}
