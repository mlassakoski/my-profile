import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mlassakoski-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnInit {

  @Input() data;

  constructor() { }

  ngOnInit() {
  }

}
