import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SingleEvent } from '../../models/single-event.model';
import { OnThisDayEventService } from '../../services/on-this-day-event.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})
export class CalendarComponent implements OnInit {
  public date = new Date();
  public list$: Observable<SingleEvent[]> =
    this.onThisDayEventService.fetchEvent(
      this.date.getMonth() + 1,
      this.date.getDay() + 1
    );
  public showDropdown = true;
  panelOpenState = false;

  constructor(private onThisDayEventService: OnThisDayEventService) {}

  ngOnInit(): void {
    setInterval(() => (this.date = new Date()));
  }
}
