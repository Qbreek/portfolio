import { Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CalendarComponent {
  public date = new Date();
  public showPanel = true;
  public songs = new FormGroup({
    song: new FormControl(null),
  });

  public togglePanel() {
    this.showPanel = !this.showPanel;
  }
}
