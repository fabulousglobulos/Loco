import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar'

@Component({
  selector: 'app-time-selection',
  templateUrl: './time-selection.component.html',
  styleUrls: ['./time-selection.component.css']
})
export class TimeSelectionComponent implements OnInit {

  inputStartDate: any;
  // public startdate :FormControl;
  startdate = new Date(new Date().setDate(new Date().getDate() - 180));
  inputEndDate: any;

  periodDef: { start: Date; end: Date; } | undefined;

  constructor(private _snackBar: MatSnackBar) {

    this.inputStartDate = this.startdate
    this.inputEndDate = new Date();
  }

  ngOnInit(): void {

  }

  loadPeriod(): void {
    console.log('loadPeriod');
    console.log(String(this.inputStartDate));
    console.log(String(this.inputEndDate));
    this.periodDef = { start: this.inputStartDate, end: this.inputEndDate };

    this._snackBar.open("Loading done", "Success",{duration :5000 });
  }

}
