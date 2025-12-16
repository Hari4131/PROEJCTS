import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseComponent } from './base/base.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { InstallAlertComponent } from './install-alert/install-alert.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    BaseComponent,
    NavbarComponent,
    FooterComponent,
    InstallAlertComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatDialogModule
  ]
})
export class LayoutModule { }
