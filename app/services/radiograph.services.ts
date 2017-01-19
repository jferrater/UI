import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import { Patient } from '../models/patient';
import { Radiograph } from '../models/radiograph';

import 'rxjs/add/operator/map';

@Injectable()
export class RadiographService {

    constructor(private _http:Http) {
        console.log("RadiographService is initialized!");
    }

    getPatients() {
        return this._http.get("http://localhost:8888/patients")
            .map(res => res.json());
    }

    searchPatient(socialSecurityNumber : string) {
        return this._http.get("http://localhost:8888/patients/search/patient?socialSecurityNumber="+socialSecurityNumber)
            .map(res => res.json());
    }
    
    showRadiographsByPatientId(_id: string) {
        return this._http.get("http://localhost:8888/patients/"+_id+"/radiographs")
            .map(res => res.json());
    }

    addPatient(patientModel:Patient) {
        var json = JSON.stringify(patientModel);
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this._http.post("http://localhost:8888/patients", json, {
            headers: headers
        }).map(res=>res.json());
    }

    addRadiograph(_id:string, radiographModel:Radiograph) {
        var json = JSON.stringify(radiographModel);
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this._http.post("http://localhost:8888/patients/"+_id+"/radiographs", json, {
            headers: headers
        }).map(res=>res.json());
    }

    getPatient(id:string) {
        return this._http.get("http://localhost:8888/patients/"+id)
            .map(res => res.json());
    }
}