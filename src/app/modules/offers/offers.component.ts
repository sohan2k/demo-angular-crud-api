import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, ElementRef, OnDestroy, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { DataTableDirective } from 'angular-datatables';
import { data } from 'jquery';
import { Subject } from 'rxjs';
import { ApiResponse } from 'src/app/model/api-response';
import { IOffer } from 'src/app/model/offers';
import { OffersService } from 'src/app/services/offers.service';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
})
export class OffersComponent implements OnInit, OnDestroy {
  // Array Column
  headArray:any[]=[
  {'head':'Id','field':'id'}, {'head':'Name','field':'name'},
  {'head':'Description','field':'description'}, {'head':'Discount','field':'discount'},
  {'head':'Offer Type','field':'offerType'}, {'head':'Coupon Code','field':'couponCode'},
  {'head':'User Type','field':'userType'},  {'head':'Maximum No Of Use','field':'maxNoOfUse'},
  {'head':'Maximum Discount','field':'maxDiscount'},{'head':'Status','field':'isActive'},{'head':'Action','field':''}];

  isAction=false;
// modal id
  modalID={
    update:'offerUpdate',
    delete:'offerDelete'
  }

  mySubscription: any;
  // empty lsi to store api response
  offerList :IOffer[]=[];
  
  // errorMsg='';
  // msg:any;

  // used in form dropdown
  offerTypeList=['FLAT','PERCENTAGE'];
  userTypeList=['NEW', 'OLD'];

  //  initialize offerModel as a IOffer type empty object
  offerModel:IOffer= {} as IOffer; 

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();
  
  @ViewChild(DataTableDirective ,{static : false}) 
  dtElement: DataTableDirective=DataTableDirective ;//= new DataTableDirective({},{},{});
  

  constructor(private offerService:OffersService, private router: Router,
     private http:HttpClient , private chRef : ChangeDetectorRef){
    // this.router.routeReuseStrategy.shouldReuseRoute = function () {
    //   return false;
    //   };
    //   this.mySubscription = this.router.events.subscribe((event) => {
    //   if (event instanceof NavigationEnd) {
    //   // Trick the Router into believing it's last link wasn't previously loaded
    //   this.router.navigated = false;
    //   }
    //   });
  }
  
  ngOnInit(){
    console.log("oninit call");
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      lengthMenu:[5,10,15,20],
      serverSide: true,
      processing: true,
    },
    this.getAllOffers();
  }


  getAllOffers(){
    // console.log( this.offerService.getAlloffers().subscribe(data => console.log( data.payload)));
    this.offerService.getAlloffers().subscribe(data =>{ 
      this.offerList= data.payload;
      this.chRef.detectChanges();
      this.dtTrigger.next(this.offerList);
    });
  }

  currentData:any;

  onSubmit(form:any){
    this.offerService.addOffer(form).subscribe(data => console.log(data));
    this.rerender();
 }

  // getById(){
  //   return this.offerService.getById(3).subscribe(data => this.msg= data.payload);
  // }

  updateRequest(item:any){
    console.log(item.id);
    this.offerModel=item;
    console.log(this.offerModel);
    console.log(item);
  }
  updateOffer(form:any){
    this.offerService.updateById(this.offerModel.id,form).subscribe(data => console.log(data));
    this.rerender();
  }

  deleteRequest(item:any){
    this.offerModel=item;
  }

  deleteOffer(){
    this.offerService.deleteById(this.offerModel.id).subscribe(data => {
      console.log(data);
    });

    // this.rerender();
  }

  //this is for destroy the datatable and re initialize
  rerender() 
  {
    console.log("render called")
      this.dtElement.dtInstance.then((dtInstance:DataTables.Api)=>
      {
        dtInstance.destroy();
        console.log("table instance destroyed")
        this.dtTrigger.next(this.offerList);
      })
  }
  

// it reset the data table every time we leave the page attached to the component.
  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();

  }

  

}
