import { Component, OnInit, Input } from '@angular/core';
import { Course } from '.././course';
@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.css']
})
export class ThirdComponent implements OnInit {
	@Input() sC:Course;
  constructor() { }

  ngOnInit() {
  }

}
