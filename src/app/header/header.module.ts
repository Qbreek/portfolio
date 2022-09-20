import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CalendarComponent } from './components/calendar/calendar.component';
import { MenuComponent } from './components/menu/menu.component';
import { SharedModule } from '../shared/shared.module';
import { MatMenuModule } from '@angular/material/menu';
import { MatExpansionModule } from '@angular/material/expansion';

@NgModule({
  declarations: [HeaderComponent, CalendarComponent, MenuComponent],
  imports: [
    CommonModule,
    SharedModule,
    MatToolbarModule,
    MatMenuModule,
    MatExpansionModule,
  ],
  exports: [HeaderComponent],
})
export class HeaderModule {}
