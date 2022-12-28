import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OffersComponent } from './offers.component';
import { TableComponent } from 'src/app/common/table/table.component';
import { FormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';


@NgModule({
  declarations: [
    OffersComponent,
    TableComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    DataTablesModule
  ],
  exports:[
    OffersComponent
  ]
})
export class OffersModule { }
