import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { Store } from '@ngrx/store';
import { VehiclemodelState } from '../store/vehiclemodel.state';
import { environment } from '../../../../environments/environment';
import { PaginateModel } from '../../../shared/models/paginate.model';
import { VehiclemodelModel } from '../models/vehiclemodel.model';
import { VehiclemodelQueryParams } from '../models/vehiclemodel.queryParams';

const url = environment.wsUrl;

@Injectable({
  providedIn: 'root'
})
export class VehiclemodelService {

  constructor(
    private readonly _http: HttpClient,
    private readonly _store: Store<VehiclemodelState>
  ) { }

  public findAll( queryParams: any ): Observable<PaginateModel<VehiclemodelModel[]>> {
    const queryString = new URLSearchParams( queryParams ).toString();
    console.log( queryString );

    return this._http.get(`${ url }/vehiclemodel?${ queryString }`, {
      headers: {
        'Authorization': `Bearer ${ localStorage.getItem('access_token') }`
      }
    } );

  }
  
}