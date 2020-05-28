import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label, Color } from 'ng2-charts';
@Component({
  selector: 'app-grafica',
  templateUrl: './grafica.page.html',
  styleUrls: ['./grafica.page.scss'],
})
export class GraficaPage implements OnInit {

  riesgos = [
    "0",
    "bajo",
    "medio",
    "alto",
    ""
  ]

  public bubbleChartOptions: ChartOptions = {
    responsive: true,
    legend: {
       display: false,
    },
    scales: {
      xAxes: [{
        gridLines: { 
        color: "rgba(0, 0, 0, 0)", 
       },
        ticks: {
          stepSize:1,
          min: 0,
          max: 4,
          callback: value => this.riesgos[value]
        }
      }],
      yAxes: [{
         gridLines: { 
        color: "rgba(0, 0, 0, 0)", 
       },
        ticks: {
          stepSize:5,
          min: 0,
          max: 20,
        }
      }]
    }
  };
  public bubbleChartType: ChartType = 'bubble';
  

  public bubbleChartData: ChartDataSets[] = [
    {
      data: [
        { x: 1, y: 3, r: 8 }

      ]
    },
  ];

  public bubbleChartColors: Color[] = [
    {
      backgroundColor: [
        'black'
      ]
    }
  ];

  constructor() { }

  ngOnInit() {
  }
  
}
