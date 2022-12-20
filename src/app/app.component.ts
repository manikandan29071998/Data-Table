import { Component, ViewChild } from '@angular/core';
import { Table } from 'primeng/table';
import { ApiDataService } from './api-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  cols:any=[];
  products=[]
  @ViewChild('dt')
  dt!: Table;
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

  filterGlobal($event: Event, stringVal: any) {
    this.dt.filterGlobal(($event.target as HTMLInputElement).value, stringVal);
  }
}
