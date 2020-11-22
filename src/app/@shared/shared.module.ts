import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MaterialModule} from './material/material.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import {SettingsRoutingModule} from '../settings/settings-routing.module';



@NgModule({
  declarations: [NavbarComponent],
  imports: [
    CommonModule,
    MaterialModule,
    SettingsRoutingModule
  ],
  exports: [
    MaterialModule,
    NavbarComponent
  ]
})
export class SharedModule { }
