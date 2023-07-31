import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Observable, Observer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpacexserviceService {

  url:string = "https://api.spacexdata.com/v4/crew";

  constructor(private http:HttpClient ) { }





//  givespacexData(): Observable<any>{
  
// return new Observable((obs:Observer<any>)=>{
//   fetch("https://api.spacexdata.com/v4/crew").then(response =>{
//   return response.json();
//   })
//   .then(data =>{
//     obs.next(data)
//   })

// })


// }

givespacexData(): Observable<any>{
  
  return new Observable((obs:Observer<any>)=>{
    this.http.get("https://api.spacexdata.com/v4/crew").subscribe((data) =>{
    obs.next(data)
    });
  });
  
  }





}
