import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseComponent } from './base/base.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { InstallAlertComponent } from './install-alert/install-alert.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';

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
    MatDialogModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
  ]
})
export class LayoutModule { }
