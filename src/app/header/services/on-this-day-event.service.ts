import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { EventsResponse } from '../models/events-response.model';

@Injectable({
  providedIn: 'root',
})
export class OnThisDayEventService {
  constructor(private http: HttpClient) {}

  public fetchEvent(currentMonth: number, currentDay: number) {
    return this.http
      .get<EventsResponse>(
        `https://byabbe.se/on-this-day/${currentMonth + 1}/${
          currentDay + 1
        }/events.json`
      )
      .pipe(
        map((res) => {
          return res.events;
        })
      );
  }

  public fetchBirth() {
    return this.http.get('/api');
  }

  public fetchDeath() {
    return this.http.get('/api');
  }
}
