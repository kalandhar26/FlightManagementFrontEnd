import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Schedule } from '../Entities/schedule';
import { ScheduleService } from '../Services/schedule.service';

@Component({
  selector: 'app-schedule-list',
  templateUrl: './schedule-list.component.html',
  styleUrls: ['./schedule-list.component.css']
})
export class ScheduleListComponent implements OnInit {

  schedules: Schedule[];

  constructor(private router: Router,
    private scheduleService: ScheduleService) { }

  ngOnInit(): void {
    this.getSchedules();
  }

  private getSchedules() {
    this.scheduleService.getSchedules().subscribe(
      data => {
        this.schedules = data;
      });
  }

  updateSchedule(id: number) {
    this.router.navigate(['update-schedule', id]);
  }

  deleteSchedule(id: number) {
    this.scheduleService.deleteScheduleById(id).subscribe(data => {
      console.log(data);
      this.getSchedules();
    }, error => { console.log(error) });
  }

  viewSchedule(id: number) {
    this.router.navigate(['view-schedule', id]);
  }


}
