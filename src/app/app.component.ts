import { Component } from '@angular/core';
import { ApiDataService } from './api-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  cols:any=[];
  products=[]
  constructor(private service:ApiDataService){}

  ngOnInit(){
    this.service.getapidata().subscribe((res:any)=>{
      this.products=res.data;
      
      let arr1:any=[];
      for(const item of this.products){        
        arr1=Object.keys(item).map((data)=>data)
      }
      
      for(let item of arr1){ 
        let arr2:any={};
        arr2.field =  item;
        arr2.header = item.toUpperCase();
        this.cols.push(arr2)
      }      
    })
  }
}
