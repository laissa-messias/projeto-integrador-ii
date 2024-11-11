import { Directive, Self, HostBinding, Input } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
    selector: '[form-field-check-invalid]'
})
export class FormFieldCheckInvalidDirective {
    @Input() public class!: string;

    constructor(
        @Self() private ngControl: NgControl
    ) { }

    @HostBinding('class.is-invalid')
    public get isInvalid(): boolean {
        return this.invalid;
    }

    public get valid(): boolean {
        return this.ngControl.valid && (this.ngControl.dirty || this.ngControl.touched) ? true : false;
    }

    public get invalid(): boolean {
        return !this.ngControl.pending && !this.ngControl.valid && (this.ngControl.touched || this.ngControl.dirty) ? true : false;
    }
}