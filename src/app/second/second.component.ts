import { Component, OnInit } from '@angular/core';
import { ThirdComponent } from '.././third/third.component';
import { Course } from '.././course';
const Courses:Course[]=[
{
	id:1,
	name:"AngularJS",
	fee:12000,
	trainer:"Praveen",
	duration:25,
},
{
	id:2,
	name:"PHP",
	fee:15000,
	trainer:"Ashwini",
	duration:45
},
{
	id:3,
	name:"Angular",
	fee:17000,
	trainer:"Dev",
	duration:4
}
]
@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {
	courses:Course[]=Courses;
	selectedCourse:Course;
	
updateSelectedCourse(s:Course):void{
	this.selectedCourse=s;
}

  constructor() { }

  ngOnInit() {
  }
}
