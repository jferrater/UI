import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { RadiographService } from '../../services/radiograph.services';

@Component({
  moduleId: module.id,
  selector: 'patients',
  templateUrl: 'patients.component.html'
})
export class PatientsComponent  implements OnInit{
    patients: Array<Object>;
    ssnumber: any;
    patient: any;
    _id:string;

    constructor(private _radiographService: RadiographService, 
        private router:ActivatedRoute,) {
        this.ssnumber="";
    }

    ngOnInit() {
        this.router.params.subscribe((params) => {
            let id = params['id'];
            if(typeof id == 'undefined') {
                id = 1;
            }
            return this._radiographService.getPatient(id).subscribe(patient => {
                this.patient = patient;
            });
        });
    }

    patientList() {
        this.patient = null;
        this._radiographService.getPatients().subscribe(patients => {
            this.patients = patients._embedded.patients;
            console.log(this.patients);
        });
    }
 
     searchPatient() {
        console.log("Searching patient by social security number");
        return this._radiographService.searchPatient(this.ssnumber).subscribe(patient=>{
            this.patients = patient._embedded.patients;
            console.log(this.patients);

      });
    }

}