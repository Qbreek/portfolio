import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.component.html',
  styleUrls: ['./date-time.component.scss'],
})
export class DateTimeComponent {
  @Input() date!: Date;
  @Output() dateClicked: EventEmitter<void> = new EventEmitter();

  public onDateClick() {
    this.dateClicked.emit();
  }
}
