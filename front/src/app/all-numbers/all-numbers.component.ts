import { Component, OnInit, Input } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ClientTiragesService } from '../client-tirages.service';
import {  DistributionResult,DistributionValueResult } from '../TirageResult'

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
    //var datas: TirageResult[];
    this.clientTirageService.getRawData(thePeriod.start, thePeriod.end).subscribe(data => {
      //datas = data
      //console.log(data);
      console.log(data);
     // debugger;
      let final: DistributionResult[] = new Array<DistributionResult>();
      var self = this;
      let ids = [1, 2, 3, 4, 5];
      ids.forEach(function (id) {
        let result = {} as DistributionResult;
        result.name="Boule "+id;
        result.series = [] as DistributionValueResult[];
        final.push(result);
      }      );


      data.forEach(function (d) {
        //let result = {} as DistributionResult;
        //result.name = 

        let dateName = self.date2String(d.date);

        
        final[0].series.push(    { name: dateName ,  value : d.boule1 });
        final[1].series.push(    { name: dateName ,  value : d.boule2 });
        final[2].series.push(    { name: dateName ,  value : d.boule3 });
        final[3].series.push(    { name: dateName ,  value : d.boule4 });
        final[4].series.push(    { name: dateName ,  value : d.boule5 });

        
      })
      // {date: '2021-07-31T00:00:00', boule1: 22, boule2: 6, boule3: 46, boule4: 7, …}
      console.log("finish")
      this.multiWithAllSeries = final;

      //  {
      //   "name": "Belgium",
      //   "series": [
      //     {
      //       "value": 2382,
      //       "name": "2016-09-17T10:45:53.289Z"
      //     },
      //     {
      //       "value": 6891,
      //       "name": "2016-09-17T22:55:14.849Z"
      //     },
      //     {
      //       "value": 3102,
      //       "name": "2016-09-18T01:16:48.651Z"
      //     },
      //     {
      //       "value": 4178,
      //       "name": "2016-09-12T18:37:36.077Z"
      //     },
      //     {
      //       "value": 2186,
      //       "name": "2016-09-14T15:23:00.467Z"
      //     }
      //   ]
      // },
      // {

      //debugger;
    });


    //debugger;

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





