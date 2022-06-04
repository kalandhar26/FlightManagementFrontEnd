import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Airline } from '../Entities/airline';

@Injectable({
  providedIn: 'root'
})
export class AirlineService {

  private baseURL = "http://localhost:8080/api/airline";

  constructor(private httpClient: HttpClient) {
  }

  getAllAirlines(): Observable<any> {
    return this.httpClient.get(`${this.baseURL}`);
  }

  createAirline(airline: Airline): Observable<any> {
    return this.httpClient.post(`${this.baseURL}`, airline);
  }

  getAirlineById(id: number): Observable<any> {
    return this.httpClient.get(`${this.baseURL}/${id}`);
  }

  updateAirline(airline: Airline, id: number): Observable<any> {
    return this.httpClient.put(`${this.baseURL}/${id}`, airline);
  }

  deleteAirlineById(id: number): Observable<any> {
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
