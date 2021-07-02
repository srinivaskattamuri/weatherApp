import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing'
import { HttpClient } from '@angular/common/http';
import { DashboardComponent } from './dashboard.component';
import { AppRoutingModule } from '../../app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { CommonHelperModule } from '../../common-helper.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { WeatherServiceService } from 'src/app/service/weather-service.service';
import { Router, RouterModule } from '@angular/router';
import { throwError, NEVER } from 'rxjs';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let weatherSvc :WeatherServiceService;

  const weatherData = [
    {
      "coord": {
        "lon": 37.6156,
        "lat": 55.7522
      },
      "weather": [
        {
          "id": 803,
          "main": "Clouds",
          "description": "broken clouds",
          "icon": "04d"
        }
      ],
      "base": "stations",
      "main": {
        "temp": 21.43,
        "feels_like": 21.56,
        "temp_min": 19.6,
        "temp_max": 22.24,
        "pressure": 1009,
        "humidity": 74,
        "sea_level": 1009,
        "grnd_level": 992
      },
      "visibility": 10000,
      "wind": {
        "speed": 3.71,
        "deg": 7,
        "gust": 7.31
      },
      "clouds": {
        "all": 77
      },
      "dt": 1625160258,
      "sys": {
        "type": 2,
        "id": 2000314,
        "country": "RU",
        "sunrise": 1625100582,
        "sunset": 1625163407
      },
      "timezone": 10800,
      "id": 524901,
      "name": "Moscow",
      "cod": 200
    },
    {
      "coord": {
        "lon": 2.3486,
        "lat": 48.8534
      },
      "weather": [
        {
          "id": 803,
          "main": "Clouds",
          "description": "broken clouds",
          "icon": "04d"
        }
      ],
      "base": "stations",
      "main": {
        "temp": 22.64,
        "feels_like": 22.58,
        "temp_min": 21.34,
        "temp_max": 23.45,
        "pressure": 1017,
        "humidity": 62
      },
      "visibility": 10000,
      "wind": {
        "speed": 0.45,
        "deg": 40,
        "gust": 3.13
      },
      "clouds": {
        "all": 75
      },
      "dt": 1625160428,
      "sys": {
        "type": 2,
        "id": 2012208,
        "country": "FR",
        "sunrise": 1625111469,
        "sunset": 1625169450
      },
      "timezone": 7200,
      "id": 2968815,
      "name": "Paris",
      "cod": 200
    },
    {
      "coord": {
        "lon": -3.6828,
        "lat": 40.4893
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01d"
        }
      ],
      "base": "stations",
      "main": {
        "temp": 31.96,
        "feels_like": 29.74,
        "temp_min": 30.18,
        "temp_max": 34.06,
        "pressure": 1004,
        "humidity": 14
      },
      "visibility": 10000,
      "wind": {
        "speed": 0.45,
        "deg": 229,
        "gust": 5.36
      },
      "clouds": {
        "all": 0
      },
      "dt": 1625160428,
      "sys": {
        "type": 2,
        "id": 2005119,
        "country": "ES",
        "sunrise": 1625114876,
        "sunset": 1625168938
      },
      "timezone": 7200,
      "id": 6359304,
      "name": "Madrid",
      "cod": 200
    },
    {
      "coord": {
        "lon": 123.0485,
        "lat": 13.7715
      },
      "weather": [
        {
          "id": 804,
          "main": "Clouds",
          "description": "overcast clouds",
          "icon": "04n"
        }
      ],
      "base": "stations",
      "main": {
        "temp": 25.99,
        "feels_like": 25.99,
        "temp_min": 25.99,
        "temp_max": 25.99,
        "pressure": 1010,
        "humidity": 88,
        "sea_level": 1010,
        "grnd_level": 1009
      },
      "visibility": 10000,
      "wind": {
        "speed": 0.34,
        "deg": 263,
        "gust": 0.83
      },
      "clouds": {
        "all": 98
      },
      "dt": 1625160428,
      "sys": {
        "country": "PH",
        "sunrise": 1625174638,
        "sunset": 1625221160
      },
      "timezone": 28800,
      "id": 1726701,
      "name": "Barcelona",
      "cod": 200
    },
    {
      "coord": {
        "lon": 19.0399,
        "lat": 47.498
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01d"
        }
      ],
      "base": "stations",
      "main": {
        "temp": 23.8,
        "feels_like": 23.38,
        "temp_min": 23.37,
        "temp_max": 24.29,
        "pressure": 1007,
        "humidity": 44
      },
      "visibility": 10000,
      "wind": {
        "speed": 2.24,
        "deg": 310,
        "gust": 4.47
      },
      "clouds": {
        "all": 0
      },
      "dt": 1625159898,
      "sys": {
        "type": 2,
        "id": 2009313,
        "country": "HU",
        "sunrise": 1625107832,
        "sunset": 1625165075
      },
      "timezone": 7200,
      "id": 3054643,
      "name": "Budapest",
      "cod": 200
    }
  ]
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardComponent ],
      imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        CommonHelperModule,
        BrowserAnimationsModule,
        RouterTestingModule
      ],
      providers:[WeatherServiceService,RouterTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
      fixture.detectChanges();
      jasmine.createSpy('weatherSvc')
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('my fn', function() {
  it('Weather Data for a City',  () => {
    component.ngOnInit();
    expect(component.weatherData).toBe(weatherData)
  });
  })
});
