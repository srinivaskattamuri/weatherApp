import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const apiKey: string = environment.apiKey;


@Injectable({
  providedIn: 'root'
})
export class WeatherServiceService {

  constructor(private http: HttpClient) { }

  getWeatherForCities(location:number):any {
    return this.http.get(`${environment.apiUrl}/weather?id=${location}&appid=${apiKey}&units=metric`)
  }

  getWeatherForCurrentCity(location:number){
    return this.http.get(`${environment.apiUrl}/forecast?id=${location}&appid=${apiKey}&units=metric`)
  }

}
