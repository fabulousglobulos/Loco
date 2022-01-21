import { Component, ComponentFactoryResolver, OnInit, Input } from '@angular/core';
import { ClientTiragesService } from '../client-tirages.service';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-numero-complementaire',
  templateUrl: './numero-complementaire.component.html',
  styleUrls: ['./numero-complementaire.component.css']
})
export class NumeroComplementaireComponent implements OnInit {


  @Input()
  get periodDef(): any { return this._period; }
  set periodDef(p: any) {
    this._period = p;

    if (p) {

      this.clientTirageService.getSeriesNumberComplementaireFromApi(p.start, p.end).subscribe(x => {
        this.multiWithAllSeries = x
      });

      this.clientTirageService.getSerieUniqueNumberComplementaireFromApi(p.start, p.end).subscribe(x => {
        this.multiWithUniqueSerie = x[0].series
      });

    }

  }
  _period: any;

  multiWithAllSeries: any[] | undefined;
  multiWithUniqueSerie: any[] | undefined;
  constructor(private clientTirageService: ClientTiragesService) {
  }

  ngOnInit(): void {
  }


  view: any[] = [1500, 500];
  // options
  legend: boolean = true;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Numero Complementaire';
  yAxisLabel: string = '#';
  timeline: boolean = true;

  colorScheme = {
    domain: ['#8B0000', '#FFB6C1',
      '#7FFFD4', '#D8BFD8',
      '#2F4F4F', '#FF8C00',
      '#7CFC00', '#800080',
      '#5F9EA0', '#FFA07A',
      '#EEE8AA', '#EEE8AA',
      '#D8BFD8', '#D8BFD8',
      '#7FFFD4', '#7FFFD4',
      '#FFF8DC', '#FFF8DC',
      '#C0C0C0', '#C0C0C0'
    ]
  };



  onSelect(data: any): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data: any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data: any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }
}
