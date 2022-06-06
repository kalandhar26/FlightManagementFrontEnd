import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchflightService {

  private baseURL = "http://localhost:8080/api/schedule/source";

  constructor(private httpClient: HttpClient) {

  }

  getScheduleBySourceAndDestination(source: string, destination: string): Observable<any> {
    return this.httpClient.get<any>(`${this.baseURL}/${source}/destination/${destination}`);
  }

}
