import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DockComponent } from './dock/dock.component';

@NgModule({
  declarations: [DockComponent],
  imports: [CommonModule],
  exports: [DockComponent],
})
export class DockModule {}
