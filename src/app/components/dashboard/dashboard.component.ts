import { Component, OnInit } from '@angular/core';
import { WeatherServiceService } from '../../service/weather-service.service';
import { Observable, forkJoin } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(protected weatherSvc:WeatherServiceService,
    private router: Router
  ) { }
  weatherData:Array<any> = [];
  cityList = [524901,2968815,6359304,1726701,3054643];
  today = new Date();

  ngOnInit(): void {
   const obsArray:Array<any> = [];
   this.cityList.forEach((cityCode) => {
    obsArray.push(this.weatherSvc.getWeatherForCities(cityCode))
   })
   forkJoin(obsArray).subscribe((res:Array<any>) => {
     if(res && res.length){
      this.weatherData = [...res];
     }
   })
  }

  showWeatherDetails(data:any){
     this.weatherSvc.getWeatherForCurrentCity(data.id).subscribe((res:any) => {
         if( res.list && res.list.length){
           this.router.navigate(['/cityWeather'],{state: {data: res}});
        }

     })
  }

}
