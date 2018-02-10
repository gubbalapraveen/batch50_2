import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ArthService } from '../arth.service';

import {AbcService } from '../abc.service';
@Component({
  selector: 'app-eigth',
  templateUrl: './eigth.component.html',
  styleUrls: ['./eigth.component.css']
})
export class EigthComponent implements OnInit {

  constructor(
	private httpClient:HttpClient,
	private arthService:ArthService,
	private abcService:AbcService
	) { }
	students:any[];
  ngOnInit() {
	  
	  let x=this.abcService.display();
	  console.log(x);
	  
	  this.abcService.gettingData();
	  
	  //this.arthService.sub(100,20).subscribe(function(res){console.log(res)});
	 // this.arthService.jdata().subscribe((res)=>{console.log(res);this.students=res;});  
	  
	  //this.arthService.jdatasend()
	 // .subscribe((res)=>{
	//	  console.log(res);
	//	  this.arthService.jdata().subscribe((res)=>{console.log(res);this.students=res;});
	//  });
	  
	  
	  /*this.httpClient
	  .post("http://localhost:3000/students",{"id":5,"name":"praveen","age":"34"})
	  .subscribe((res)=>{console.log(res)});
	 
	  this.httpClient
	  .get("http://localhost:3000/students",{observe: 'response'})
	  .subscribe((res)=>{console.log(res);console.log(res.headers}); */
	  //console.log("Hello")
  }

}
