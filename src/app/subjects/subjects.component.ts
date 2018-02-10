import { Component, OnInit } from '@angular/core';

const Subjects:any[]=[
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
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.css']
})
export class SubjectsComponent implements OnInit {

  constructor() { }
  subjects:any[]=Subjects;
  ngOnInit() {
	console.log(this.subjects)
  }

}
