import { Injectable } from '@angular/core';
@Injectable()
export class DataService{
	course:string="Angular";
	getCourses():string{
		return this.course;
	}
}