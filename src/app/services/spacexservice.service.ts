import { Injectable } from '@angular/core';
import { Observable, Subject, Observer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpacexserviceService {

  url:string = "https://api.spacexdata.com/v4/crew";

  constructor() { }





 givespacexData(): Observable<any>{
  
return new Observable((obs:Observer<any>)=>{
  fetch("https://api.spacexdata.com/v4/crew").then(response =>{
  return response.json();
  })
  .then(data =>{
    obs.next(data)
  })

})


}





}
