import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './components/layout/layout.component';
import { HeaderModule } from '../header/header.module';
import { RouterModule, Routes } from '@angular/router';
import { DockModule } from '../dock/dock.module';
import { DesktopModule } from '../desktop/desktop.module';

const routes: Routes = [{ path: '', component: LayoutComponent }];

@NgModule({
  declarations: [LayoutComponent],
  imports: [
    CommonModule,
    HeaderModule,
    DesktopModule,
    DockModule,
    RouterModule.forChild(routes),
  ],
})
export class LayoutModule {}
