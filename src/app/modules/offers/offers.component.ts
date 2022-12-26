import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { data } from 'jquery';
import { IOffer } from 'src/app/model/offers';
import { OffersService } from 'src/app/services/offers.service';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
})
export class OffersComponent {
  headArray:any[]=['id','name','description','discount','offerType',
  'couponCode','userType','maxNoOfUse','maxDiscount','isActive'];

  mySubscription: any;

  offerList :any[]=[];
  errorMsg='';
  msg:any;
  offerTypeList=['FLAT','PERCENTAGE'];
  userTypeList=['NEW', 'OLD'];
  //  initialize offerModel as a IOffer type empty object
  offerModel:IOffer= {} as IOffer; 

  
  constructor(private offerService:OffersService, private router: Router, private http:HttpClient){
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
    // this.getAllOffers();
    
  }


  getAllOffers(){
    // console.log( this.offerService.getAlloffers().subscribe(data => this.userList= data.payload));
    console.log(this.offerModel);
    this.getById();
    return this.offerService.getAlloffers().subscribe(data => this.offerList= data.payload);
  }


  // ngOnDestroy() {
  //   if (this.mySubscription) {
  //   this.mySubscription.unsubscribe();
  //   }
  // } 

  onSubmit(form:any){
    this.offerService.addOffer(form).subscribe(data => console.log(data));
  }

  getById(){
    return this.offerService.getById(3).subscribe(data => this.msg= data.payload);
  }

  updateRequest(){
    this.offerModel=this.msg;
  }
  updateOffer(form:any){
    this.offerService.updateById(3,form).subscribe(data => console.log(data));
  }


}
