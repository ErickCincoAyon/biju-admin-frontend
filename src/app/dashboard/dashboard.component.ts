import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AnimateService } from '../shared/services/animate.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  @ViewChild('sidebar') sidebar!: ElementRef;

  constructor(
    private readonly _animateService: AnimateService,
  ) { }

  ngOnInit(): void {
  }

  toggleSidebarHandler( event: boolean ): void {
    console.log( event );
    ( event ) ? this._animateService.toggleAnimation( this.sidebar.nativeElement, 'show', 'marginLeft', '-250px', '0px', 300 ) 
      : this._animateService.toggleAnimation( this.sidebar.nativeElement, 'hide', 'marginLeft', '-250px', '0', 300 );
  }

}
