import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-subject-details',
  templateUrl: './subject-details.component.html',
  styleUrls: ['./subject-details.component.css']
})
export class SubjectDetailsComponent implements OnInit {

  constructor(
  private route: ActivatedRoute
  ) { }
 
  current_subject:any={};
  ngOnInit() {
	console.log("SubjectD")
	this.route.params.subscribe((gg)=>{this.current_subject=gg; console.log(gg)});
  }

}