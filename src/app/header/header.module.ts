import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';

// Components
import { MenuComponent } from './components/menu/menu.component';
import { HeaderComponent } from './components/header/header.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { DateTimeComponent } from './components/calendar/date-time/date-time.component';
import { OnThisDayComponent } from './components/calendar/on-this-day/on-this-day.component';
import { MusicComponent } from './components/calendar/music/music.component';

// Material
import { MatMenuModule } from '@angular/material/menu';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    HeaderComponent,
    CalendarComponent,
    MenuComponent,
    DateTimeComponent,
    OnThisDayComponent,
    MusicComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatToolbarModule,
    MatMenuModule,
    MatExpansionModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCardModule,
    FormsModule,
  ],
  exports: [HeaderComponent],
  providers: [MatDatepickerModule],
})
export class HeaderModule {}
