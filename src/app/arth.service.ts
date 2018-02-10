import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { HttpClient } from '@angular/common/http';

@Injectable()
export class ArthService {

  constructor(private httpClient:HttpClient) { }
  
  add(x:number,y:number):number{
	  return x+y;
  }
	
  sub(x:number,y:number):Observable<number>{
	  var z;
	  z=x+y;
	  return of(z);
  }
  
  /*jdata():Observable<any>{
	 return this.httpClient
	 .get("http://api.brewerydb.com/v2/beer/oeGSxs",{params:{key:"12bf756bbb2f2bf90e58642b67e12a74"}});
	  
  }
  jdatasend():Observable<any>{
	  return this.httpClient.post("http://localhost:3000/students",{"id":16,"name":"preeti","age":"23"})
  }*/
}
