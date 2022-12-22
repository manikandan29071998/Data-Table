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
            "id": res.id,
            'user id': res.username,
            "name": res.name,
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

          const custom_api_order: any = ["username","id","name","website","email","phone"];
          const modify_api: customObj[] = order(result.data, custom_api_order);


          //rename key
          modify_api.map((res:any,i:any)=>{
            const { username, ...rest }:any = modify_api[i];
          modify_api[i] = {
            "user id": username,
            ...rest
          };
          })

          //delete property
          modify_api.map((res:any)=>{
            delete res.website;
          })

          return modify_api;
          */
        
        return result.data;
      })
    );
  }
}
