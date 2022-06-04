import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Schedule } from '../Entities/schedule';
import { ScheduleService } from '../Services/schedule.service';

@Component({
  selector: 'app-view-schedule',
  templateUrl: './view-schedule.component.html',
  styleUrls: ['./view-schedule.component.css']
})
export class ViewScheduleComponent implements OnInit {

  id: number;
  schedule: Schedule;
  constructor(private route: ActivatedRoute,
    private scheduleService: ScheduleService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.schedule = new Schedule();
    this.scheduleService.getScheduleById(this.id).subscribe(
      data => {
        this.schedule = data;
      }
    )
  }
}
