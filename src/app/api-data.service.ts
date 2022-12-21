import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ApiDataService {
  constructor(private http: HttpClient) {}

  getapidata(): Observable<any> {
    return this.http.get<any>('./assets/fakeApi.json').pipe(
      map((result: any) => {
        result.data = result.data.map((res: any) => {
          let data = {
            id: res.id,
            'user id': res.username,
            name: res.name,
            // "website": res.website,
            'email id': res.email,
            'phone number': res.phone,
          };
          return data;
        });

        
        /*
        //column position change
          type customObj = Record<string, any> | null;
          const order:Function = ((data: any, order: any) => {
              return data.map((node:any) => {
                  return order.reduce((runningValue:any, currentValue:any) => {
                      return Object.assign(runningValue, { [currentValue]: node?.[currentValue]});
                  }, {});
              });
          })

          const customorder: any = ["username","id","name","website","email","phone"];
          const ordered: customObj = order(result.data, customorder);
          return ordered;
        */


        /*
        //rename key
          result.data.map((res:any,i:any)=>{
            const { username, ...rest } = result.data[i];
          result.data[i] = {
            "user id": username,
            ...rest
          };
          })
        */


        /*
        //delete property
          result.data.map((res:any)=>{
            delete res.id;
            return res
          })
        */

        return result.data;
      })
    );
  }
}
