import { Component, ViewChild } from '@angular/core';
import { Table } from 'primeng/table';
import { ApiDataService } from './api-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  cols: any = [];
  products = [];
  @ViewChild('dt') dt!: Table;

  constructor(private service: ApiDataService) {
    this.cols = [
      {header: "Website", field: "website", "position":6},
      {header: "User Id", field: "id", "position":1, width:"10px"},
      {header: "Name", field: "name", "position":2, color:"skyblue"},
      {header: "Username", field: "username", "position":3},
      // {header: "Email", field: "email", "position":4},
      {header: "Phone", field: "phone", "position":5},
    ];

  }

  ngOnInit() {
    this.cols.map((data:any)=>{
      if (data.header=="Name") {
        return data.header="Full Name"
      }return ''
    })


    this.service.getapidata().subscribe((res: any) => {
      this.products = res.data;

      // let arr1: any = [];
      // for (const item of this.products) {
      //   arr1 = Object.keys(item).map((data) => data);
      // }

      // for (let item of arr1) {
      //   let arr2: any = {};
      //   arr2.field = item;
      //   arr2.header = item.toUpperCase();
      //   this.cols.push(arr2);
      // }
    });
  }

  getname(event:any,obj:any){
    if (obj===event.username) {
      if (event.id<=3) {
        return "red"
      }
      return ''
    }
    return''
    
  }

  filterGlobal($event: Event, stringVal: any) {
    this.dt.filterGlobal(($event.target as HTMLInputElement).value, stringVal);
  }
}
