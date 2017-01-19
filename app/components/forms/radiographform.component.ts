import { Component } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';

import { RadiographService } from '../../services/radiograph.services';
import { Radiograph } from '../../models/radiograph';
import { Patient } from '../../models/patient';
import { PatientFormComponent } from './patientform.component';

import 'rxjs/add/operator/switchMap';

@Component({
  moduleId: module.id,
  selector: 'radiographform',
  templateUrl: 'radiographform.component.html'
})
export class RadiographFormComponent  {

    radiographModel = new Radiograph("", "", "");
    patient: any;
    added=false;
    result = Object;

    constructor(private _radiographService: RadiographService, 
                private patientFrom:PatientFormComponent,
                private route: ActivatedRoute,
                private location: Location) {

    }

    addRadiographData(){
        this.patient = this.patientFrom.patient;
        var _id= this.patient["Id"];
        this.added = true;
        return this._radiographService.addRadiograph(_id, this.radiographModel).subscribe(radiograph=>{
            this.result = radiograph;
        });
    }
}