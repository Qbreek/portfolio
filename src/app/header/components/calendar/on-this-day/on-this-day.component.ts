import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SingleEvent } from 'src/app/header/models/single-event.model';
import { OnThisDayEventService } from 'src/app/header/services/on-this-day-event.service';

@Component({
  selector: 'app-on-this-day',
  templateUrl: './on-this-day.component.html',
  styleUrls: ['./on-this-day.component.scss'],
})
export class OnThisDayComponent implements OnInit {
  @Input() date!: Date;
  public eventList$!: Observable<SingleEvent[]>;

  constructor(private onThisDayEventService: OnThisDayEventService) {}

  ngOnInit(): void {
    this.eventList$ = this.onThisDayEventService.fetchEvent(
      this.date.getMonth() + 1,
      this.date.getDay() + 1
    );
  }
}
