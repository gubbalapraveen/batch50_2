import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-template-forms',
  templateUrl: './template-forms.component.html',
  styleUrls: ['./template-forms.component.css']
})
export class TemplateFormsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
	check(x){
		console.log("Hello Forms",x)
	}
	
	address= new FormGroup({
		city : new FormControl("",
								[
									Validators.minLength(4),
									Validators.maxLength(8),
									Validators.required
								]
							),
		pincode : new FormControl("",
								[
									Validators.minLength(4),
									Validators.maxLength(8),
									Validators.required
								]
							)
	});
	
	logit(){
		console.log(this.address);
	}
}
