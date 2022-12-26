import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OffersComponent } from './offers.component';
import { TableComponent } from 'src/app/common/table/table.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    OffersComponent,
    TableComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    OffersComponent
  ]
})
export class OffersModule { }
