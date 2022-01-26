import { Component, OnInit, Input } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ClientTiragesService } from '../client-tirages.service';
import { DistributionResult, DistributionValueResult } from '../TirageResult'

@Component({
  selector: 'app-all-numbers',
  templateUrl: './all-numbers.component.html',
  styleUrls: ['./all-numbers.component.css']
})
export class AllNumbersComponent implements OnInit {

  constructor(private clientTirageService: ClientTiragesService, public datepipe: DatePipe) {

  }

  @Input()
  get periodDef(): any { return this._period; }
  set periodDef(p: any) {
    this._period = p;

    if (p) {
      this.uploadGraf(p);
    }

  }
  _period: any;
  ngOnInit(): void {
  }

  uploadGraf(thePeriod: any): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(thePeriod)));
    this.clientTirageService.getRawData(thePeriod.start, thePeriod.end).subscribe(data => {
      let final: DistributionResult[] = new Array<DistributionResult>();
      var self = this;
      let ids = [1, 2, 3, 4, 5];
      ids.forEach(function (id) {
        let result = {} as DistributionResult;
        result.name = "Boule " + id;
        result.series = [] as DistributionValueResult[];
        final.push(result);
      });


      data.forEach(function (d) {
        let dateName = self.date2String(d.date);

        final[0].series.push({ name: dateName, value: d.boule1 });
        final[1].series.push({ name: dateName, value: d.boule2 });
        final[2].series.push({ name: dateName, value: d.boule3 });
        final[3].series.push({ name: dateName, value: d.boule4 });
        final[4].series.push({ name: dateName, value: d.boule5 });
      })

      this.multiWithAllSeries = final;
    });
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
  xAxisLabel: string = 'Tirages';
  yAxisLabel: string = '#';
  timeline: boolean = true;

  colorScheme = {
    domain: ['#FF0000', '#00FF00',
      '#0000FF', '#00FFFF',
      '#FFFF00'
    ]
  };

  multiWithAllSeries: any[] | undefined;

  public date2String(date: Date): string {
    return String(this.datepipe.transform(date, 'yyyy-MM-dd'));
  }

}

