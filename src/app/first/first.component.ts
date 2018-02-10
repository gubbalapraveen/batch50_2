import { Component, OnInit } from '@angular/core';
import { DataService } from '.././data.service'
@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  constructor() { }

  ngOnInit() {
	  let ds=new DataService();
	  console.log(ds.getCourses());
	  
  }
  abc():void{
	  //console.log(ds.getCourses());
  }
  

}
