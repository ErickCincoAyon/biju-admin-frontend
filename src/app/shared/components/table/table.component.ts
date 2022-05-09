import { Component, EventEmitter, Input, OnInit, Output, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ColumnModel } from '../../models/column.model';
import { ActionModel } from '../../models/action.model';
import { PaginatorModel } from '../../models/paginator.model';
import { ToastrService } from 'ngx-toastr';
import { AnimateService } from '../../services/animate.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @ViewChild('limitSelector') limitSelector!: ElementRef;
  @Input() columns!: ColumnModel[];
  @Input() data!: any;
  @Input() paginator!: PaginatorModel;
  @Output() action: EventEmitter<ActionModel> = new EventEmitter();
  
  public showLimitSelector: boolean = false;
  public searchForm = this._fb.group({
    search: ['', [ Validators.required, Validators.maxLength(40) ] ],
  });

  constructor(
    private readonly _fb: FormBuilder,
    private readonly _toastrService: ToastrService,
    private readonly _animateService: AnimateService,
  ) { }

  ngOnInit(): void { }

  search(): void { }

  actionToDo( id: string, action: string ): void {
    this.action.emit({ id, action });
  }

  actionPaginator( action: string ): void {

    switch ( action ) {
      case 'first':
        ( this.paginator.prevPage ) ? this.action.emit({ id: '1', action: 'paginate' })
          : this._toastrService.info('Te encuentras en la primer pagina !');
        return;

      case 'prev':
        ( this.paginator.prevPage ) ? this.action.emit({ id: this.paginator.prevPage.toString(), action: 'paginate' })
          : this._toastrService.info('Te encuentras en la primer pagina !');
        return;

      case 'next':
        ( this.paginator.nextPage ) ? this.action.emit({ id: this.paginator.nextPage.toString(), action: 'paginate' })
          : this._toastrService.info('Te encuentras en la ultima pagina !');
        return;

      case 'last':
        ( this.paginator.page !== this.paginator.totalPages ) ? this.action.emit({ id: this.paginator.totalPages.toString(), action: 'paginate' })
          : this._toastrService.info('Te encuentras en la ultima pagina !');
        return;
    
      default:
        return;
    }

  }

  toggleLimitSelector( event: boolean ): void {

    this.showLimitSelector = event;
    ( event ) ? this._animateService.toggleAnimation( this.limitSelector.nativeElement, 'show', 'transform', 'scaleY(0)', 'scaleY(1)', 200 ) 
      : this._animateService.toggleAnimation( this.limitSelector.nativeElement, 'hide', 'transform', 'scaleY(0)', 'scaleY(1)', 200 );
      
  }

}
