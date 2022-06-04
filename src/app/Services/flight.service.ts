import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Flight } from '../Entities/flight';

@Injectable({
  providedIn: 'root'
})
export class FlightService {

  private baseURL = "http://localhost:8080/api/flight";

  constructor(private httpClient: HttpClient) { }

  getAllFlights(): Observable<any> {
    return this.httpClient.get(`${this.baseURL}`);
  }

  createFlight(flight: Flight): Observable<any> {
    return this.httpClient.post(`${this.baseURL}`, flight);
  }

  getFlightById(id: number): Observable<any> {
    return this.httpClient.get(`${this.baseURL}/${id}`);
  }

  updateFlight(flight: Flight, id: number): Observable<any> {
    return this.httpClient.put(`${this.baseURL}/${id}`, flight);
  }

  deleteFlightById(id: number): Observable<any> {
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }

}
