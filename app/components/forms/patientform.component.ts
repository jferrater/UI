import { Component } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';

import { RadiographService } from '../../services/radiograph.services';
import { Patient } from '../../models/patient';

@Component({
  moduleId: module.id,
  selector: 'patientform',
  templateUrl: 'patientform.component.html'
})
export class PatientFormComponent  {

    patient: Object;
    submitted = false;
    addedRadiograph=false;
    patientModel = new Patient("", "", null, "","");

    constructor(  
            private route: ActivatedRoute,
            private location: Location,
            private _radiographService: RadiographService) {

    }
 
   addPatient() {
       this.submitted = true;
       this._radiographService.addPatient(this.patientModel).subscribe(patient=>{
           this.patient = patient;
       });

   }

   backToHome() {
       console.log("Returning home page");
       this.location.back();
   }

}