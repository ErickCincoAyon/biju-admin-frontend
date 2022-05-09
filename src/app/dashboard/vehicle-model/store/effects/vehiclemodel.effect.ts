import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, switchMap, catchError } from 'rxjs/operators';
import { of } from "rxjs";
import { VehiclemodelService } from '../../services/vehiclemodel.service';
import * as action from '../actions/vehiclemodel.action';
import { VehiclemodelQueryParams } from '../../models/vehiclemodel.queryParams';

@Injectable()
export class VehiclemodelEffects {
    constructor(
        private readonly actions$: Actions,
        private readonly _vehiclemodelService: VehiclemodelService,
    ) {}

    findAll$ = createEffect(() => 
        this.actions$.pipe(
            ofType( action.VehiclemodelActionTypes.VEHICLEMODEL_FIND_ALL ),
            map(( params: any ) => params ),
            switchMap(( params ) => 
                this._vehiclemodelService.findAll( params.queryParams ).pipe(
                    map((value) => {
                        return action.successVehiclemodelFindAll({ res: value })
                    }),
                    catchError(( error ) => {
                        return of( action.vehiclemodelError({ res: error }))
                    })
                )
            )
        )
    );

}