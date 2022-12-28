import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableComponent } from './common/table/table.component';
import {HttpClientModule} from '@angular/common/http';
import { OffersModule } from './modules/offers/offers.module';
import { OffersService } from './services/offers.service';
import { FormsModule } from '@angular/forms';
import {DataTablesModule} from 'angular-datatables';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    OffersModule,
    FormsModule,
    DataTablesModule
  ],
  // exports:[
    // TableComponent
  // ],
  providers: [OffersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
