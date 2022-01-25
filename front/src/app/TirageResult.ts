export interface TirageResult {
    date: Date;
    boule1: number;
    boule2: number;
    boule3: number;
    boule4: number;
    boule5: number;
    complementaire: number;
  }



  export interface DistributionResult {
    name : String;
    series: DistributionValueResult[];
  }

  export interface DistributionValueResult {
    name : String;
    value: number;
  }