import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Schedule } from '../Entities/schedule';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

  private baseURL = "http://localhost:8080/api/schedule";

  constructor(private httpClient: HttpClient) { }

  getSchedules(): Observable<any> {
    return this.httpClient.get(`${this.baseURL}`);
  }

  addSchedule(schedule: Schedule): Observable<any> {
    return this.httpClient.post(`${this.baseURL}`, schedule);
  }

  getScheduleById(id: number): Observable<any> {
    return this.httpClient.get(`${this.baseURL}/${id}`);
  }

  updateSchedule(schedule: Schedule, id: number): Observable<any> {
    return this.httpClient.put(`${this.baseURL}/${id}`, schedule);
  }

  deleteScheduleById(id: number): Observable<any> {
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }

  getScheduleBySource(source: string): Observable<any> {
    return this.httpClient.get(`${this.baseURL}/source/${source}`);
  }

}
