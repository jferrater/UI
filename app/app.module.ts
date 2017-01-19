import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppComponent }  from './app.component';

import {routing} from './app.routing';
import { PatientsComponent } from './components/patients/patients.component';
import { PatientComponent } from './components/patient/patient.component';
import { PatientFormComponent } from './components/forms/patientform.component';
import { RadiographFormComponent } from './components/forms/radiographform.component';

@NgModule({
  imports:      [ 
                  BrowserModule, 
                  HttpModule, 
                  FormsModule,
                  routing
 
                ],
  declarations: [ AppComponent,
                  PatientsComponent,
                  PatientFormComponent,
                  RadiographFormComponent,
                  PatientComponent,
                ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
