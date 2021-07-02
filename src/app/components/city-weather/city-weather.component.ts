import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {Location} from '@angular/common';

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
  constructor(private route:Router,
    private _location: Location) {
    this.currentNavData = this.route.getCurrentNavigation();
  }

  ngOnInit(): void {
    if(this.currentNavData && this.currentNavData.extras && this.currentNavData.extras.state && this.currentNavData.extras.state.data){
      this.weatherCityData = this.currentNavData.extras.state.data.list;
      this.currentCityname = this.currentNavData.extras.state.data.city.name
    }
     if(this.weatherCityData && this.weatherCityData.length){
       this.nextFiveDaysData = this.weatherCityData.filter((dayData) => dayData.dt_txt && dayData.dt_txt.indexOf('9') > -1)
     }
  }

  backClicked() {
    this._location.back();
  }
}
