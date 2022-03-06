import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(
      () => InputComponent
    ),
    multi: true
  }]
})
export class InputComponent implements ControlValueAccessor, OnInit {

  @Input() public parentForm!: FormGroup;
  @Input() public fieldName!: string;
  @Input() public type!: string;
  @Input() public placeholder!: string;
  @Input() public isDisabled!: boolean;

  public defaultType!: string;
  public value!: string;
  public changed!: ( value: string ) => void;
  public touched!: () => void;

  get formField (): FormControl {
    return this.parentForm?.get( this.fieldName ) as FormControl;
  }

  constructor() {}

  ngOnInit(): void {
    this.defaultType = this.type;
  }

  writeValue( value: string ): void {
    this.value = value;
  }

  onChange( event: Event ): void {
    const value: string =
      ( <HTMLInputElement>event.target ).value;
    this.changed( value );
  }

  registerOnChange( fn: any ): void {
    this.changed = fn;
  }

  registerOnTouched( fn: any ): void {
    this.touched = fn;
  }

  setDisabledState( isDisabled: boolean ): void {
    this.isDisabled = isDisabled;
  }

  togglePasswordVisible(): void {
    this.type = ( this.type === 'text' ) ? 'password': 'text';
  }

}
