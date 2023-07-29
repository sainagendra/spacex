import { Component, OnInit } from '@angular/core';
import { SpacexserviceService } from './services/spacexservice.service';
import { spacexpayload } from './services/models/spacemodel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  constructor( public spacexservice: SpacexserviceService)
  { 

  }
  title = 'spacex';

  retrivedata: any;

  mydata =[];

   mybody:spacexpayload  = {
    name:"",
    status:"",
    agency:""
   };



 



 

  ngOnInit(){
   this.retrivedata =  this.callspacexApi();  
  }



  async callspacexApi(){
     this.spacexservice.givespacexData().subscribe(data =>{

      this.mydata = data;

      console.log("data", data);
      this.mybody.name =  data[0].name
      this.mybody.status =  data['wikipedia'];
      this.mybody.agency =  data[0].agency ;
    

    })


 

   }
}
