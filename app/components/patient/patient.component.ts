import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { Location }                 from '@angular/common';
import { Radiograph } from '../../models/radiograph';
import { RadiographService } from '../../services/radiograph.services';

@Component({
  moduleId: module.id,
  selector: 'patient',
  templateUrl: 'patient.component.html'
})
export class PatientComponent  implements OnInit{
    patient: any;
    radiographs: Array<Object>;
    patientId: any;
    added=false;
    radiographModel = new Radiograph("", "", "");
    result = Object;
    
    constructor(
        private router:ActivatedRoute,
        private _radiographService: RadiographService,
        private location: Location,
    ) {   }

    ngOnInit() {
        this.router.params.subscribe((params) => {
            let id = params['id'];
            return this._radiographService.getPatient(id).subscribe(patient => {
                this.patient = patient;
                this.patientId=this.patient.Id;
            });
        });
    }

    onClickViewRadiographs() {
         return this._radiographService.showRadiographsByPatientId(this.patientId).subscribe(radiograph=>{
              console.log(radiograph._embedded.radiographs);
              this.radiographs = radiograph._embedded.radiographs;
            
         });
    }

    addRadiographData(){
        this.added = true;
        return this._radiographService.addRadiograph(this.patientId, this.radiographModel).subscribe(radiograph=>{
            this.result = radiograph;
        });
    }

    back() {
        this.location.back();
    }
} 