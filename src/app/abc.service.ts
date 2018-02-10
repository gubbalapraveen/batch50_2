import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class AbcService {

  constructor(
	private httpClient:HttpClient
  ) { }
	
	display(){
		return "ABSVSVSV";
	}
	
	gettingData():void{
		this.httpClient.get("http://my-json-server.typicode.com/gubbalapraveen/jdata/posts")
		.subscribe((res)=>{console.log(res);})
	}
}
