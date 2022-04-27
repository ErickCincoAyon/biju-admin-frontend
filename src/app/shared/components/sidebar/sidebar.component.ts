import { Component, OnInit, OnDestroy } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { AuthState } from '../../../auth/store/auth.state';
import { takeUntil, Subject } from 'rxjs';
import { selectAdmin } from 'src/app/auth/store/selectors/auth.selector';
import { AdminModel } from '../../../auth/models/admin.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit, OnDestroy {

  public componentDestroyed$ = new Subject();
  public admin!: AdminModel;

  constructor(
    private readonly _store: Store<AuthState>,
  ) { }

  ngOnInit(): void {
    this._store.pipe( takeUntil( this.componentDestroyed$ ),select( selectAdmin )).subscribe(( value ) => {
      
      this.admin = ( value! ) && value;

    });
  }

  ngOnDestroy() {
    this.componentDestroyed$.next(1);
  }

}
