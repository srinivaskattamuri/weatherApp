import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-city-weather',
  templateUrl: './city-weather.component.html',
  styleUrls: ['./city-weather.component.scss']
})
export class CityWeatherComponent implements OnInit {
  currentCityname: string = '';
  weatherCityData:Array<any> = [];
  currentNavData:any = [];
  nextFiveDaysData:Array<any> = [];
  constructor(private route:Router) {
    this.currentNavData = this.route.getCurrentNavigation();
  }

  ngOnInit(): void {
    if(this.currentNavData.extras.state.data){
      this.weatherCityData = this.currentNavData.extras.state.data.list;
      this.currentCityname = this.currentNavData.extras.state.data.city.name
    }
     if(this.weatherCityData && this.weatherCityData.length){
       this.nextFiveDaysData = this.weatherCityData.filter((dayData) => dayData.dt_txt && dayData.dt_txt.indexOf('9') > -1)
     }
  }

}
