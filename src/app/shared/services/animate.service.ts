import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnimateService {

  constructor() { }

  sidebarAnimate( element: any, action: string ) {
    if( action === 'show' ) {
      element.animate([
          { marginLeft: '500%' },
          { marginLeft: '0' }
      ], {
          duration: 300,
          easing: 'ease-in-out',
          iterations: 1,
          direction: 'alternate',
          fill: 'forwards'
      });
    } else if ( action === 'hide' ) {
        element.animate([
          { marginLeft: '0' },
          { marginLeft: '500%' }
        ], {
          duration: 300,
          easing: 'ease-in-out',
          iterations: 1,
          direction: 'alternate',
          fill: 'forwards'
        });
    }
  }

  toggleAnimation( element: HTMLDivElement, action: string, property: string, firstValue: string, secondValue: string, duration: number ): void {

    if( action === 'show' ) {

      element.animate([
          { [property]: firstValue },
          { [property]: secondValue }
      ], {
          duration,
          easing: 'ease-in-out',
          iterations: 1,
          direction: 'alternate',
          fill: 'forwards'
      });

    } else if ( action === 'hide' ) {

        element.animate([
          { [property]: secondValue },
          { [property]: firstValue }
        ], {
          duration,
          easing: 'ease-in-out',
          iterations: 1,
          direction: 'alternate',
          fill: 'forwards'
        });

    }
  }
}
