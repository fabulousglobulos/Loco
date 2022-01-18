import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { TirageResult } from './TirageResult';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientTiragesService {

url : string = "https://localhost:7122/Tirages";

  constructor(  private http: HttpClient) { }

  getTiragesFromApi(): Observable<TirageResult[]>{
    const myheaders = new HttpHeaders();
    myheaders.append('Access-Control-Allow-Headers', 'Content-Type');
    myheaders.append('Access-Control-Allow-Methods', 'GET');
    myheaders.append('Access-Control-Allow-Origin', '*');
        return this.http.get<TirageResult[]>(this.url+"/Raw", {headers: myheaders});
  }



  getSeriesNumberComplementaireFromApi( from : Date, to : Date): Observable<TirageResult[]>{
    // const myheaders = new HttpHeaders();
    // myheaders.append('Access-Control-Allow-Headers', 'Content-Type');
    // myheaders.append('Access-Control-Allow-Methods', 'GET');
    // myheaders.append('Access-Control-Allow-Origin', '*');

    // let params = new HttpParams();

    // // Begin assigning parameters
    // params = params.append('from', from.toDateString());
    // params = params.append('to', to.toDateString(),);


    // let data = { "from" : from , "to" :to };

        return this.http.get<TirageResult[]>(`${this.url}/SeriesAllAdditionalNumber`, { params: this.buildParam(from,to)});
  }


  
  getSerieUniqueNumberComplementaireFromApi( from : Date, to : Date): Observable<TirageResult[]>{
    // const myheaders = new HttpHeaders();
    // myheaders.append('Access-Control-Allow-Headers', 'Content-Type');
    // myheaders.append('Access-Control-Allow-Methods', 'GET');
    // myheaders.append('Access-Control-Allow-Origin', '*');

    // let params = new HttpParams();

    // // Begin assigning parameters
    // params = params.append('from', from.toDateString());
    // params = params.append('to', to.toDateString(),);


    // let data = { "from" : from , "to" :to };

        return this.http.get<TirageResult[]>(`${this.url}/SeriesUniqueAdditionalNumber`, { params: this.buildParam(from,to)});
  }



buildParam(from:Date , to:Date) : HttpParams{
  let params = new HttpParams();

  // Begin assigning parameters
  params = params.append('from', from.toDateString());
  params = params.append('to', to.toDateString(),);

  return params;
}



}
