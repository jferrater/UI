import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PatientsComponent } from './components/patients/patients.component';
import { PatientFormComponent } from './components/forms/patientform.component';
import { RadiographFormComponent } from './components/forms/radiographform.component';
import { PatientComponent } from './components/patient/patient.component';

const appRoutes: Routes = [
                      {
                        path: "addPatient",
                        component: PatientFormComponent
                      },
                      {
                        path: 'dashboard',
                        component: PatientsComponent
                      },
                      {
                        path: 'addradiograph/:id',
                        component: RadiographFormComponent
                      },
                     {
                        path: 'patient/:id',
                        component: PatientComponent
                      },
                     {
                        path: '',
                        redirectTo: '/dashboard',
                        pathMatch: 'full'
                      },
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);