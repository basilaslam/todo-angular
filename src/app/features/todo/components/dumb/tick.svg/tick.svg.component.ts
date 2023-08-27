import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tick',
  templateUrl: './tick.component.html',
  styleUrls: ['./tick.svg.component.css']
})
export class TickSvgComponent {
  @Input() isDone!: boolean
text: any;

}
