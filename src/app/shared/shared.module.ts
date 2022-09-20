import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { RemoveCommaPipe } from './pipes/remove-comma.pipe';

@NgModule({
  declarations: [RemoveCommaPipe],
  imports: [CommonModule, MatIconModule],
  exports: [CommonModule, MatIconModule, RemoveCommaPipe],
})
export class SharedModule {}
