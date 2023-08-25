import { Directive, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appMatchPattern]'
})
export class MatchPatternDirective implements OnChanges{
  @Input() pattern: RegExp = /RegExp/
  @Input() password = ''
  constructor(private _el:ElementRef) {
  }


  ngOnChanges(changes: SimpleChanges): void {
    this.checkPattern()
  }

  checkPattern(){

    const regex = new RegExp(this.pattern)
    const match = regex.test(this.password)

    const element = this._el.nativeElement as HTMLInputElement
    if(match){
      element.style.color = 'green'
    }else{
      element.style.color = 'red'
    }
  }

}
