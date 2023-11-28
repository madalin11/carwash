import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { environment } from '../../environments/environment.tst'
import { map, Observable } from 'rxjs';
import { IUser } from "./models/user.model";

type ServiceType = keyof typeof environment.msApi;

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {
  }

  public getSingle(serviceType: ServiceType, url: string, params?: any): Observable<any> {
    return this.makeRequest(serviceType, 'GET', url, params);
  }

  public getAll(serviceType: ServiceType, url: string, params?: any): Observable<{ accounts: IUser[] }> {
    return this.makeRequest(serviceType, 'GET', url, params);
  }

  public save(serviceType: ServiceType, url: string, params?: any): Observable<any> {
    return this.makeRequest(serviceType, 'POST', url, params);
  }

  public update(serviceType: ServiceType, url: string, params?: any): Observable<any> {
    return this.makeRequest(serviceType, 'PUT', url, params);
  }

  public delete(serviceType: ServiceType, url: string, params?: any): Observable<any> {
    return this.makeRequest(serviceType, 'DELETE', url, params);
  }


  private makeRequest(serviceType: ServiceType, method: string, url: string, params?: any,
                      responseType: 'json' | 'blob' | 'text' = 'json'): Observable<any> {
    let requestUrl = this.getServiceUrl(serviceType) + url;
    let request;

    if (method === 'GET') {
      if (params) {
        requestUrl += `?${this.toQueryString(params)}`;
      }
      request = this.http.request(method, requestUrl, { responseType });
    } else {
      request = this.http.request(method, requestUrl, {
        body: params, responseType, headers: {
          'Access-Control-Allow-Origin': '*'
        }
      });
    }

    if (responseType === 'json') {
      return request.pipe(map(result => this.responseMapJson(result, url)));
    } else {
      return request;
    }
  }

  private getServiceUrl(serviceType: string) {
    // @ts-ignore
    return environment.msApi[serviceType];
  };

  private toQueryString(params: any) {
    let encodedStr = '';
    for (let key in params) {
      if (params.hasOwnProperty(key)) {
        if (encodedStr && encodedStr[encodedStr.length - 1] !== '&') {
          encodedStr = encodedStr + '&';
        }

        let value: any = params[key];
        if (value instanceof Array) {
          for (let i in value) {
            if (value.hasOwnProperty(i)) {
              encodedStr = encodedStr + key + '=' + encodeURIComponent(value[i]) + '&';
            }
          }
        } else if (typeof value === 'object') {
          for (let innerKey in value) {
            if (value.hasOwnProperty(innerKey)) {
              encodedStr = encodedStr +
                key + '[' + innerKey + ']=' + encodeURIComponent(value[innerKey]) + '&';
            }
          }
        } else {
          encodedStr = encodedStr + key + '=' + encodeURIComponent(value);
        }
      }
    }
    if (encodedStr[encodedStr.length - 1] === '&') {
      encodedStr = encodedStr.substr(0, encodedStr.length - 1);
    }
    return encodedStr;
  }

  private responseMapJson(data: any, endpoint: string) {
    if (data) {
      return Object.assign({}, data);
    } else {
      return;
    }
  }
}
