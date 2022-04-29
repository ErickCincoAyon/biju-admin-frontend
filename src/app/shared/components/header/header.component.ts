import { Component, OnInit, OnDestroy, ViewChild, ElementRef, HostListener, Output, EventEmitter } from '@angular/core';
import { AdminModel } from '../../../auth/models/admin.model';
import { Subject, takeUntil } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { AuthState } from '../../../auth/store/auth.state';
import { selectAdmin } from '../../../auth/store/selectors/auth.selector';
import { environment } from '../../../../environments/environment';
import { AnimateService } from '../../services/animate.service';
import { AuthService } from '../../../auth/services/auth.service';
import { logout } from 'src/app/auth/store/actions/auth.action';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, Validators } from '@angular/forms';

const serverUrl = environment.wsUrl;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit, OnDestroy {

  @Output() showSidebar = new EventEmitter<boolean>();
  @ViewChild('adminCard') adminCard!: ElementRef;

  public componentDestroyed$ = new Subject();
  public searchForm = this._fb.group({
    search: ['', [ Validators.required, Validators.maxLength(40) ] ],
  });

  public url = serverUrl;
  public admin!: AdminModel;
  public settings: boolean = false;
  public sidebar: boolean = false;

  constructor(
    private readonly _store: Store<AuthState>,
    private readonly _animateService: AnimateService,
    private readonly _authService: AuthService,
    private readonly _router: Router,
    private readonly _toastrService: ToastrService,
    private readonly _fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    console.log( this.sidebar );
    this._store.pipe( takeUntil( this.componentDestroyed$ ),select( selectAdmin )).subscribe(( value ) => {
      
      this.admin = ( value! ) && value;
      console.log( this.admin );

    });
  }

  toggleSidebar( show: boolean ): void {
    
    this.sidebar = show;
    this.showSidebar.emit( show );

  }

  toggleSettings( show: boolean ): void {

    this.settings = show;
    ( show ) ? this._animateService.toggleAnimation( this.adminCard.nativeElement, 'show', 'marginLeft', '400%', '0', 300 ) 
      : this._animateService.toggleAnimation( this.adminCard.nativeElement, 'hide', 'marginLeft', '400%', '0', 300 );

  }

  search(): void {

    console.log( this.searchForm.getRawValue() );

  }

  @HostListener('document:click', ['$event']) onDocumentClick(event: any) {
    
    ( this.settings ) && this.toggleSettings( false );
    if ( this.sidebar ) {
      this.sidebar = false;
      this.showSidebar.emit( false );
    }
    
  }

  @HostListener('document:keydown.escape', ['$event']) onKeydownHandler(event: KeyboardEvent) {
    
    ( this.settings ) && this.toggleSettings( false );
    if ( this.sidebar ) {
      this.sidebar = false;
      this.showSidebar.emit( false );
    }
    
  }

  logout(): void {
    this._store.dispatch( logout() );
    this._authService.logout();
    this._toastrService.success('Esperamos que tengas un excelente dia !')
    this._router.navigate(['/auth/iniciar-sesion']);
  }

  ngOnDestroy() {
    this.componentDestroyed$.next(1);
  }

}
