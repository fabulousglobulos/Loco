import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NumeroComplementaireComponent } from './numero-complementaire/numero-complementaire.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { TimeSelectionComponent } from './time-selection/time-selection.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule, } from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms'; 
import { MatToolbarModule } from '@angular/material/toolbar'
import {MatCardModule} from '@angular/material/card'
import{MatButtonModule} from '@angular/material/button';
import { AllNumbersComponent } from './all-numbers/all-numbers.component'
//import { MatAccordion ,MatExpansionPanel ,MatExpansionPanelHeader} from '@angular/material/expansion';
import { MatExpansionModule } from '@angular/material/expansion';
import {DatePipe} from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    NumeroComplementaireComponent,
    TimeSelectionComponent,
    AllNumbersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxChartsModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule    ,
    FormsModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,    
    MatExpansionModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
