import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
    selector: '[focus-invalid]'
})
export class FocusFirstInvalidFieldDirective {
    constructor(private el: ElementRef) { }

    @HostListener('submit', ['$event'])
    onFormSubmit() {
        let invalidElements = this.el.nativeElement.querySelectorAll('input.ng-invalid, textarea.ng-invalid, select.ng-invalid');
        if (invalidElements.length > 0) {
            invalidElements[0].focus();
        }
    }
}