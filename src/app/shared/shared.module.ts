import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatchPatternDirective } from './directives/match-pattern.directive';



@NgModule({
  declarations: [
    MatchPatternDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MatchPatternDirective
  ]
})
export class SharedModule { }
