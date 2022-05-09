import { Component, OnInit } from '@angular/core';
import { vehicleModelListColumns } from '../vehicle-modal.constants';
import { ColumnModel } from '../../../shared/models/column.model';
import * as data from 'src/assets/json/vehicle.model.json';
import { ActionModel } from '../../../shared/models/action.model';
import { PaginatorModel } from '../../../shared/models/paginator.model';
import { select, Store } from '@ngrx/store';
import { VehiclemodelState } from '../store/vehiclemodel.state';
import { vehiclemodelFindAll } from '../store/actions/vehiclemodel.action';
import { takeUntil } from 'rxjs';
import { selectVehiclemodels } from '../store/selectors/vehiclemodel.selector';
import { VehiclemodelModel } from '../models/vehiclemodel.model';
import { Router, ActivatedRoute } from '@angular/router';
import { VehiclemodelQueryParams } from '../models/vehiclemodel.queryParams';

@Component({
  selector: 'app-vehicle-model-list',
  templateUrl: './vehicle-model-list.component.html',
  styleUrls: ['./vehicle-model-list.component.scss']
})
export class VehicleModelListComponent implements OnInit {

  public tableColumns: ColumnModel[] = vehicleModelListColumns.columns;
  public vehiclemodels!: VehiclemodelModel[];

  public paginate = {
    page: 2,
    limit: 10,
    order: -1,
  };
  public paginator!: PaginatorModel;

  constructor(
    private readonly _store: Store<VehiclemodelState>,
    private readonly _router: Router,
    private readonly _route: ActivatedRoute,
  ) { }

  ngOnInit(): void {

    this._route.queryParams.subscribe(( value ) => {

      this.getVehiclemodels({ ...value });

    });
    
    this._store.pipe( select( selectVehiclemodels )).subscribe(( value ) => {

      if ( value && value.data ) {

        let { docs, ...paginator } = value.data;
        this.vehiclemodels = docs; 
        this.paginator = paginator;

      }

    });
  }

  actionHandler( event: ActionModel ): void {
    console.log( event );
    ( event.action === 'paginate' ) && this.getFilteredResults( parseInt( event.id ));
  }

  getVehiclemodels( queryParams: VehiclemodelQueryParams ): void {

    this._store.dispatch( vehiclemodelFindAll({ queryParams }));

  }

  getFilteredResults( page: number ): void {

    this._router.navigate(['/modelos-de-vehiculo/lista-de-modelos-de-vehiculo'], { 
      queryParams: { page }
    });

  }

}
