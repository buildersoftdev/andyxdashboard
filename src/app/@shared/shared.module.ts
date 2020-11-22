import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MaterialModule} from './material/material.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import {SettingsRoutingModule} from '../settings/settings-routing.module';
import {ChartsModule} from 'ng2-charts';



@NgModule({
  declarations: [NavbarComponent],
  imports: [
    CommonModule,
    MaterialModule,
    SettingsRoutingModule,
    ChartsModule
  ],
  exports: [
    MaterialModule,
    NavbarComponent,
    ChartsModule
  ]
})
export class SharedModule { }
