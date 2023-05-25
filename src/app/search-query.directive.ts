import { Directive, ElementRef, EventEmitter, Output } from '@angular/core';

@Directive({
  selector: '[appSearchQuery]'
})
export class SearchQueryDirective {
  @Output() appSearchQuery: EventEmitter<string> = new EventEmitter<string>();
  
  constructor(private el: ElementRef) {

   }
   public onInputChange(value: string){
    this.appSearchQuery.emit(value);
   }
}
