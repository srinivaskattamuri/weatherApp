import { TestBed } from '@angular/core/testing';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { WeatherServiceService } from './weather-service.service';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { CommonHelperModule } from 'src/app/common-helper.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';

describe('WeatherServiceService', () => {
  let service: WeatherServiceService;
  let httpMock:HttpTestingController;
  let httpClient:HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        CommonHelperModule,
        BrowserAnimationsModule,
        HttpClientTestingModule
      ],
      providers:[HttpClient]
    });
    service = TestBed.inject(WeatherServiceService);
    httpMock = TestBed.get(HttpTestingController);
    httpClient = TestBed.get(HttpClient)
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getWeatherForCities() should call http Get method for the given route', () => {
    let cityData = {
      "coord": {
        "lon": 37.6156,
        "lat": 55.7522
      },
      "weather": [
        {
          "id": 804,
          "main": "Clouds",
          "description": "overcast clouds",
          "icon": "04d"
        }
      ],
      "base": "stations",
      "main": {
        "temp": 19.46,
        "feels_like": 19.68,
        "temp_min": 18.24,
        "temp_max": 20.29,
        "pressure": 1010,
        "humidity": 85,
        "sea_level": 1010,
        "grnd_level": 993
      },
      "visibility": 10000,
      "wind": {
        "speed": 2.86,
        "deg": 355,
        "gust": 3.66
      },
      "clouds": {
        "all": 100
      },
      "dt": 1625208562,
      "sys": {
        "type": 1,
        "id": 9027,
        "country": "RU",
        "sunrise": 1625187032,
        "sunset": 1625249778
      },
      "timezone": 10800,
      "id": 524901,
      "name": "Moscow",
      "cod": 200
    }

    service.getWeatherForCities(524901).subscribe((data:any)=>{
      expect(data).toEqual(cityData);
    });
    const req = httpMock.expectOne({ method: 'GET', url:'http://api.openweathermap.org/data/2.5/weather?id=524901&appid=1a7005e9b7dcda03b39628b0e7648cde&units=metric' });
    httpMock.verify();
  });


  it('getWeatherForCurrentCity() should call http Get method for the given route', () => {
    let cityData = {
      "cod": "200",
      "message": 0,
      "cnt": 40,
      "list": [
        {
          "dt": 1625216400,
          "main": {
            "temp": 18.9,
            "feels_like": 19.04,
            "temp_min": 17.78,
            "temp_max": 18.9,
            "pressure": 1010,
            "sea_level": 1010,
            "grnd_level": 993,
            "humidity": 84,
            "temp_kf": 1.12
          },
          "weather": [
            {
              "id": 500,
              "main": "Rain",
              "description": "light rain",
              "icon": "10d"
            }
          ],
          "clouds": {
            "all": 100
          },
          "wind": {
            "speed": 3.08,
            "deg": 356,
            "gust": 3.81
          },
          "visibility": 10000,
          "pop": 0.2,
          "rain": {
            "3h": 0.12
          },
          "sys": {
            "pod": "d"
          },
          "dt_txt": "2021-07-02 09:00:00"
        },
        {
          "dt": 1625227200,
          "main": {
            "temp": 19.5,
            "feels_like": 19.46,
            "temp_min": 19.5,
            "temp_max": 19.52,
            "pressure": 1010,
            "sea_level": 1010,
            "grnd_level": 993,
            "humidity": 75,
            "temp_kf": -0.02
          },
          "weather": [
            {
              "id": 804,
              "main": "Clouds",
              "description": "overcast clouds",
              "icon": "04d"
            }
          ],
          "clouds": {
            "all": 100
          },
          "wind": {
            "speed": 3.3,
            "deg": 358,
            "gust": 3.89
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
            "pod": "d"
          },
          "dt_txt": "2021-07-02 12:00:00"
        },
        {
          "dt": 1625238000,
          "main": {
            "temp": 19.32,
            "feels_like": 19.16,
            "temp_min": 19.32,
            "temp_max": 19.32,
            "pressure": 1010,
            "sea_level": 1010,
            "grnd_level": 993,
            "humidity": 71,
            "temp_kf": 0
          },
          "weather": [
            {
              "id": 804,
              "main": "Clouds",
              "description": "overcast clouds",
              "icon": "04d"
            }
          ],
          "clouds": {
            "all": 99
          },
          "wind": {
            "speed": 3.95,
            "deg": 3,
            "gust": 4.36
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
            "pod": "d"
          },
          "dt_txt": "2021-07-02 15:00:00"
        },
        {
          "dt": 1625248800,
          "main": {
            "temp": 17.5,
            "feels_like": 17.37,
            "temp_min": 17.5,
            "temp_max": 17.5,
            "pressure": 1011,
            "sea_level": 1011,
            "grnd_level": 993,
            "humidity": 79,
            "temp_kf": 0
          },
          "weather": [
            {
              "id": 804,
              "main": "Clouds",
              "description": "overcast clouds",
              "icon": "04d"
            }
          ],
          "clouds": {
            "all": 100
          },
          "wind": {
            "speed": 3.25,
            "deg": 10,
            "gust": 5.15
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
            "pod": "d"
          },
          "dt_txt": "2021-07-02 18:00:00"
        },
        {
          "dt": 1625259600,
          "main": {
            "temp": 16.45,
            "feels_like": 16.4,
            "temp_min": 16.45,
            "temp_max": 16.45,
            "pressure": 1011,
            "sea_level": 1011,
            "grnd_level": 993,
            "humidity": 86,
            "temp_kf": 0
          },
          "weather": [
            {
              "id": 804,
              "main": "Clouds",
              "description": "overcast clouds",
              "icon": "04n"
            }
          ],
          "clouds": {
            "all": 100
          },
          "wind": {
            "speed": 2.79,
            "deg": 4,
            "gust": 4.96
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
            "pod": "n"
          },
          "dt_txt": "2021-07-02 21:00:00"
        },
        {
          "dt": 1625270400,
          "main": {
            "temp": 15.93,
            "feels_like": 15.93,
            "temp_min": 15.93,
            "temp_max": 15.93,
            "pressure": 1011,
            "sea_level": 1011,
            "grnd_level": 993,
            "humidity": 90,
            "temp_kf": 0
          },
          "weather": [
            {
              "id": 500,
              "main": "Rain",
              "description": "light rain",
              "icon": "10n"
            }
          ],
          "clouds": {
            "all": 100
          },
          "wind": {
            "speed": 2.71,
            "deg": 7,
            "gust": 5.91
          },
          "visibility": 10000,
          "pop": 0.2,
          "rain": {
            "3h": 0.13
          },
          "sys": {
            "pod": "n"
          },
          "dt_txt": "2021-07-03 00:00:00"
        },
        {
          "dt": 1625281200,
          "main": {
            "temp": 15.75,
            "feels_like": 15.78,
            "temp_min": 15.75,
            "temp_max": 15.75,
            "pressure": 1011,
            "sea_level": 1011,
            "grnd_level": 994,
            "humidity": 92,
            "temp_kf": 0
          },
          "weather": [
            {
              "id": 500,
              "main": "Rain",
              "description": "light rain",
              "icon": "10d"
            }
          ],
          "clouds": {
            "all": 100
          },
          "wind": {
            "speed": 2.86,
            "deg": 26,
            "gust": 6.23
          },
          "visibility": 10000,
          "pop": 0.34,
          "rain": {
            "3h": 0.31
          },
          "sys": {
            "pod": "d"
          },
          "dt_txt": "2021-07-03 03:00:00"
        },
        {
          "dt": 1625292000,
          "main": {
            "temp": 16.75,
            "feels_like": 16.65,
            "temp_min": 16.75,
            "temp_max": 16.75,
            "pressure": 1012,
            "sea_level": 1012,
            "grnd_level": 995,
            "humidity": 83,
            "temp_kf": 0
          },
          "weather": [
            {
              "id": 804,
              "main": "Clouds",
              "description": "overcast clouds",
              "icon": "04d"
            }
          ],
          "clouds": {
            "all": 100
          },
          "wind": {
            "speed": 3.25,
            "deg": 35,
            "gust": 5.36
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
            "pod": "d"
          },
          "dt_txt": "2021-07-03 06:00:00"
        },
        {
          "dt": 1625302800,
          "main": {
            "temp": 20.22,
            "feels_like": 19.73,
            "temp_min": 20.22,
            "temp_max": 20.22,
            "pressure": 1012,
            "sea_level": 1012,
            "grnd_level": 995,
            "humidity": 55,
            "temp_kf": 0
          },
          "weather": [
            {
              "id": 804,
              "main": "Clouds",
              "description": "overcast clouds",
              "icon": "04d"
            }
          ],
          "clouds": {
            "all": 99
          },
          "wind": {
            "speed": 2.4,
            "deg": 7,
            "gust": 4.01
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
            "pod": "d"
          },
          "dt_txt": "2021-07-03 09:00:00"
        },
        {
          "dt": 1625313600,
          "main": {
            "temp": 23.56,
            "feels_like": 23.04,
            "temp_min": 23.56,
            "temp_max": 23.56,
            "pressure": 1012,
            "sea_level": 1012,
            "grnd_level": 995,
            "humidity": 41,
            "temp_kf": 0
          },
          "weather": [
            {
              "id": 804,
              "main": "Clouds",
              "description": "overcast clouds",
              "icon": "04d"
            }
          ],
          "clouds": {
            "all": 93
          },
          "wind": {
            "speed": 4.43,
            "deg": 1,
            "gust": 4.02
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
            "pod": "d"
          },
          "dt_txt": "2021-07-03 12:00:00"
        },
        {
          "dt": 1625324400,
          "main": {
            "temp": 21.96,
            "feels_like": 21.54,
            "temp_min": 21.96,
            "temp_max": 21.96,
            "pressure": 1012,
            "sea_level": 1012,
            "grnd_level": 995,
            "humidity": 51,
            "temp_kf": 0
          },
          "weather": [
            {
              "id": 804,
              "main": "Clouds",
              "description": "overcast clouds",
              "icon": "04d"
            }
          ],
          "clouds": {
            "all": 91
          },
          "wind": {
            "speed": 4.31,
            "deg": 20,
            "gust": 4.59
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
            "pod": "d"
          },
          "dt_txt": "2021-07-03 15:00:00"
        },
        {
          "dt": 1625335200,
          "main": {
            "temp": 18.6,
            "feels_like": 18.27,
            "temp_min": 18.6,
            "temp_max": 18.6,
            "pressure": 1013,
            "sea_level": 1013,
            "grnd_level": 995,
            "humidity": 67,
            "temp_kf": 0
          },
          "weather": [
            {
              "id": 803,
              "main": "Clouds",
              "description": "broken clouds",
              "icon": "04d"
            }
          ],
          "clouds": {
            "all": 74
          },
          "wind": {
            "speed": 3.21,
            "deg": 47,
            "gust": 6.97
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
            "pod": "d"
          },
          "dt_txt": "2021-07-03 18:00:00"
        },
        {
          "dt": 1625346000,
          "main": {
            "temp": 16.5,
            "feels_like": 16.24,
            "temp_min": 16.5,
            "temp_max": 16.5,
            "pressure": 1013,
            "sea_level": 1013,
            "grnd_level": 995,
            "humidity": 78,
            "temp_kf": 0
          },
          "weather": [
            {
              "id": 801,
              "main": "Clouds",
              "description": "few clouds",
              "icon": "02n"
            }
          ],
          "clouds": {
            "all": 17
          },
          "wind": {
            "speed": 2.47,
            "deg": 34,
            "gust": 6.81
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
            "pod": "n"
          },
          "dt_txt": "2021-07-03 21:00:00"
        },
        {
          "dt": 1625356800,
          "main": {
            "temp": 15.15,
            "feels_like": 14.71,
            "temp_min": 15.15,
            "temp_max": 15.15,
            "pressure": 1013,
            "sea_level": 1013,
            "grnd_level": 996,
            "humidity": 76,
            "temp_kf": 0
          },
          "weather": [
            {
              "id": 802,
              "main": "Clouds",
              "description": "scattered clouds",
              "icon": "03n"
            }
          ],
          "clouds": {
            "all": 26
          },
          "wind": {
            "speed": 2.58,
            "deg": 29,
            "gust": 6.86
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
            "pod": "n"
          },
          "dt_txt": "2021-07-04 00:00:00"
        },
        {
          "dt": 1625367600,
          "main": {
            "temp": 15.46,
            "feels_like": 14.97,
            "temp_min": 15.46,
            "temp_max": 15.46,
            "pressure": 1014,
            "sea_level": 1014,
            "grnd_level": 996,
            "humidity": 73,
            "temp_kf": 0
          },
          "weather": [
            {
              "id": 800,
              "main": "Clear",
              "description": "clear sky",
              "icon": "01d"
            }
          ],
          "clouds": {
            "all": 0
          },
          "wind": {
            "speed": 3.55,
            "deg": 39,
            "gust": 7.06
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
            "pod": "d"
          },
          "dt_txt": "2021-07-04 03:00:00"
        },
        {
          "dt": 1625378400,
          "main": {
            "temp": 20.44,
            "feels_like": 19.95,
            "temp_min": 20.44,
            "temp_max": 20.44,
            "pressure": 1014,
            "sea_level": 1014,
            "grnd_level": 997,
            "humidity": 54,
            "temp_kf": 0
          },
          "weather": [
            {
              "id": 800,
              "main": "Clear",
              "description": "clear sky",
              "icon": "01d"
            }
          ],
          "clouds": {
            "all": 1
          },
          "wind": {
            "speed": 4.61,
            "deg": 63,
            "gust": 7.32
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
            "pod": "d"
          },
          "dt_txt": "2021-07-04 06:00:00"
        },
        {
          "dt": 1625389200,
          "main": {
            "temp": 24.33,
            "feels_like": 23.81,
            "temp_min": 24.33,
            "temp_max": 24.33,
            "pressure": 1014,
            "sea_level": 1014,
            "grnd_level": 997,
            "humidity": 38,
            "temp_kf": 0
          },
          "weather": [
            {
              "id": 800,
              "main": "Clear",
              "description": "clear sky",
              "icon": "01d"
            }
          ],
          "clouds": {
            "all": 4
          },
          "wind": {
            "speed": 5.45,
            "deg": 50,
            "gust": 7.68
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
            "pod": "d"
          },
          "dt_txt": "2021-07-04 09:00:00"
        },
        {
          "dt": 1625400000,
          "main": {
            "temp": 25.41,
            "feels_like": 25.02,
            "temp_min": 25.41,
            "temp_max": 25.41,
            "pressure": 1013,
            "sea_level": 1013,
            "grnd_level": 996,
            "humidity": 39,
            "temp_kf": 0
          },
          "weather": [
            {
              "id": 800,
              "main": "Clear",
              "description": "clear sky",
              "icon": "01d"
            }
          ],
          "clouds": {
            "all": 10
          },
          "wind": {
            "speed": 5.77,
            "deg": 58,
            "gust": 7.27
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
            "pod": "d"
          },
          "dt_txt": "2021-07-04 12:00:00"
        },
        {
          "dt": 1625410800,
          "main": {
            "temp": 22.91,
            "feels_like": 22.56,
            "temp_min": 22.91,
            "temp_max": 22.91,
            "pressure": 1014,
            "sea_level": 1014,
            "grnd_level": 997,
            "humidity": 50,
            "temp_kf": 0
          },
          "weather": [
            {
              "id": 804,
              "main": "Clouds",
              "description": "overcast clouds",
              "icon": "04d"
            }
          ],
          "clouds": {
            "all": 99
          },
          "wind": {
            "speed": 4.52,
            "deg": 58,
            "gust": 7.17
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
            "pod": "d"
          },
          "dt_txt": "2021-07-04 15:00:00"
        },
        {
          "dt": 1625421600,
          "main": {
            "temp": 21,
            "feels_like": 20.67,
            "temp_min": 21,
            "temp_max": 21,
            "pressure": 1015,
            "sea_level": 1015,
            "grnd_level": 998,
            "humidity": 58,
            "temp_kf": 0
          },
          "weather": [
            {
              "id": 804,
              "main": "Clouds",
              "description": "overcast clouds",
              "icon": "04d"
            }
          ],
          "clouds": {
            "all": 99
          },
          "wind": {
            "speed": 4.13,
            "deg": 47,
            "gust": 8.33
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
            "pod": "d"
          },
          "dt_txt": "2021-07-04 18:00:00"
        },
        {
          "dt": 1625432400,
          "main": {
            "temp": 17.57,
            "feels_like": 17.05,
            "temp_min": 17.57,
            "temp_max": 17.57,
            "pressure": 1015,
            "sea_level": 1015,
            "grnd_level": 998,
            "humidity": 64,
            "temp_kf": 0
          },
          "weather": [
            {
              "id": 802,
              "main": "Clouds",
              "description": "scattered clouds",
              "icon": "03n"
            }
          ],
          "clouds": {
            "all": 35
          },
          "wind": {
            "speed": 3.67,
            "deg": 58,
            "gust": 10.12
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
            "pod": "n"
          },
          "dt_txt": "2021-07-04 21:00:00"
        },
        {
          "dt": 1625443200,
          "main": {
            "temp": 15.26,
            "feels_like": 14.62,
            "temp_min": 15.26,
            "temp_max": 15.26,
            "pressure": 1017,
            "sea_level": 1017,
            "grnd_level": 999,
            "humidity": 68,
            "temp_kf": 0
          },
          "weather": [
            {
              "id": 801,
              "main": "Clouds",
              "description": "few clouds",
              "icon": "02n"
            }
          ],
          "clouds": {
            "all": 20
          },
          "wind": {
            "speed": 2.63,
            "deg": 63,
            "gust": 7.45
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
            "pod": "n"
          },
          "dt_txt": "2021-07-05 00:00:00"
        },
        {
          "dt": 1625454000,
          "main": {
            "temp": 15.51,
            "feels_like": 14.71,
            "temp_min": 15.51,
            "temp_max": 15.51,
            "pressure": 1017,
            "sea_level": 1017,
            "grnd_level": 999,
            "humidity": 61,
            "temp_kf": 0
          },
          "weather": [
            {
              "id": 800,
              "main": "Clear",
              "description": "clear sky",
              "icon": "01d"
            }
          ],
          "clouds": {
            "all": 5
          },
          "wind": {
            "speed": 3.84,
            "deg": 58,
            "gust": 9.41
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
            "pod": "d"
          },
          "dt_txt": "2021-07-05 03:00:00"
        },
        {
          "dt": 1625464800,
          "main": {
            "temp": 20.62,
            "feels_like": 19.91,
            "temp_min": 20.62,
            "temp_max": 20.62,
            "pressure": 1018,
            "sea_level": 1018,
            "grnd_level": 1000,
            "humidity": 45,
            "temp_kf": 0
          },
          "weather": [
            {
              "id": 800,
              "main": "Clear",
              "description": "clear sky",
              "icon": "01d"
            }
          ],
          "clouds": {
            "all": 4
          },
          "wind": {
            "speed": 4.54,
            "deg": 73,
            "gust": 7.4
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
            "pod": "d"
          },
          "dt_txt": "2021-07-05 06:00:00"
        },
        {
          "dt": 1625475600,
          "main": {
            "temp": 24.26,
            "feels_like": 23.81,
            "temp_min": 24.26,
            "temp_max": 24.26,
            "pressure": 1017,
            "sea_level": 1017,
            "grnd_level": 1000,
            "humidity": 41,
            "temp_kf": 0
          },
          "weather": [
            {
              "id": 800,
              "main": "Clear",
              "description": "clear sky",
              "icon": "01d"
            }
          ],
          "clouds": {
            "all": 7
          },
          "wind": {
            "speed": 5.39,
            "deg": 75,
            "gust": 7.05
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
            "pod": "d"
          },
          "dt_txt": "2021-07-05 09:00:00"
        },
        {
          "dt": 1625486400,
          "main": {
            "temp": 26.39,
            "feels_like": 26.39,
            "temp_min": 26.39,
            "temp_max": 26.39,
            "pressure": 1016,
            "sea_level": 1016,
            "grnd_level": 999,
            "humidity": 35,
            "temp_kf": 0
          },
          "weather": [
            {
              "id": 800,
              "main": "Clear",
              "description": "clear sky",
              "icon": "01d"
            }
          ],
          "clouds": {
            "all": 10
          },
          "wind": {
            "speed": 5.46,
            "deg": 71,
            "gust": 6.86
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
            "pod": "d"
          },
          "dt_txt": "2021-07-05 12:00:00"
        },
        {
          "dt": 1625497200,
          "main": {
            "temp": 25.4,
            "feels_like": 24.99,
            "temp_min": 25.4,
            "temp_max": 25.4,
            "pressure": 1017,
            "sea_level": 1017,
            "grnd_level": 1000,
            "humidity": 38,
            "temp_kf": 0
          },
          "weather": [
            {
              "id": 800,
              "main": "Clear",
              "description": "clear sky",
              "icon": "01d"
            }
          ],
          "clouds": {
            "all": 10
          },
          "wind": {
            "speed": 5.23,
            "deg": 67,
            "gust": 6.07
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
            "pod": "d"
          },
          "dt_txt": "2021-07-05 15:00:00"
        },
        {
          "dt": 1625508000,
          "main": {
            "temp": 20.94,
            "feels_like": 20.4,
            "temp_min": 20.94,
            "temp_max": 20.94,
            "pressure": 1018,
            "sea_level": 1018,
            "grnd_level": 1001,
            "humidity": 50,
            "temp_kf": 0
          },
          "weather": [
            {
              "id": 800,
              "main": "Clear",
              "description": "clear sky",
              "icon": "01d"
            }
          ],
          "clouds": {
            "all": 10
          },
          "wind": {
            "speed": 4.59,
            "deg": 60,
            "gust": 10.54
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
            "pod": "d"
          },
          "dt_txt": "2021-07-05 18:00:00"
        },
        {
          "dt": 1625518800,
          "main": {
            "temp": 18.05,
            "feels_like": 17.53,
            "temp_min": 18.05,
            "temp_max": 18.05,
            "pressure": 1020,
            "sea_level": 1020,
            "grnd_level": 1002,
            "humidity": 62,
            "temp_kf": 0
          },
          "weather": [
            {
              "id": 800,
              "main": "Clear",
              "description": "clear sky",
              "icon": "01n"
            }
          ],
          "clouds": {
            "all": 0
          },
          "wind": {
            "speed": 3.35,
            "deg": 79,
            "gust": 10.02
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
            "pod": "n"
          },
          "dt_txt": "2021-07-05 21:00:00"
        },
        {
          "dt": 1625529600,
          "main": {
            "temp": 15.97,
            "feels_like": 15.35,
            "temp_min": 15.97,
            "temp_max": 15.97,
            "pressure": 1021,
            "sea_level": 1021,
            "grnd_level": 1003,
            "humidity": 66,
            "temp_kf": 0
          },
          "weather": [
            {
              "id": 800,
              "main": "Clear",
              "description": "clear sky",
              "icon": "01n"
            }
          ],
          "clouds": {
            "all": 0
          },
          "wind": {
            "speed": 2.24,
            "deg": 65,
            "gust": 4.93
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
            "pod": "n"
          },
          "dt_txt": "2021-07-06 00:00:00"
        },
        {
          "dt": 1625540400,
          "main": {
            "temp": 16.35,
            "feels_like": 15.71,
            "temp_min": 16.35,
            "temp_max": 16.35,
            "pressure": 1021,
            "sea_level": 1021,
            "grnd_level": 1004,
            "humidity": 64,
            "temp_kf": 0
          },
          "weather": [
            {
              "id": 800,
              "main": "Clear",
              "description": "clear sky",
              "icon": "01d"
            }
          ],
          "clouds": {
            "all": 0
          },
          "wind": {
            "speed": 2.69,
            "deg": 71,
            "gust": 5.07
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
            "pod": "d"
          },
          "dt_txt": "2021-07-06 03:00:00"
        },
        {
          "dt": 1625551200,
          "main": {
            "temp": 21.65,
            "feels_like": 20.99,
            "temp_min": 21.65,
            "temp_max": 21.65,
            "pressure": 1022,
            "sea_level": 1022,
            "grnd_level": 1005,
            "humidity": 43,
            "temp_kf": 0
          },
          "weather": [
            {
              "id": 800,
              "main": "Clear",
              "description": "clear sky",
              "icon": "01d"
            }
          ],
          "clouds": {
            "all": 0
          },
          "wind": {
            "speed": 3.69,
            "deg": 86,
            "gust": 6.05
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
            "pod": "d"
          },
          "dt_txt": "2021-07-06 06:00:00"
        },
        {
          "dt": 1625562000,
          "main": {
            "temp": 25.43,
            "feels_like": 24.79,
            "temp_min": 25.43,
            "temp_max": 25.43,
            "pressure": 1022,
            "sea_level": 1022,
            "grnd_level": 1005,
            "humidity": 29,
            "temp_kf": 0
          },
          "weather": [
            {
              "id": 800,
              "main": "Clear",
              "description": "clear sky",
              "icon": "01d"
            }
          ],
          "clouds": {
            "all": 0
          },
          "wind": {
            "speed": 4.13,
            "deg": 97,
            "gust": 5.76
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
            "pod": "d"
          },
          "dt_txt": "2021-07-06 09:00:00"
        },
        {
          "dt": 1625572800,
          "main": {
            "temp": 27.39,
            "feels_like": 26.59,
            "temp_min": 27.39,
            "temp_max": 27.39,
            "pressure": 1021,
            "sea_level": 1021,
            "grnd_level": 1004,
            "humidity": 28,
            "temp_kf": 0
          },
          "weather": [
            {
              "id": 800,
              "main": "Clear",
              "description": "clear sky",
              "icon": "01d"
            }
          ],
          "clouds": {
            "all": 0
          },
          "wind": {
            "speed": 3.57,
            "deg": 99,
            "gust": 4.84
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
            "pod": "d"
          },
          "dt_txt": "2021-07-06 12:00:00"
        },
        {
          "dt": 1625583600,
          "main": {
            "temp": 26.9,
            "feels_like": 26.36,
            "temp_min": 26.9,
            "temp_max": 26.9,
            "pressure": 1021,
            "sea_level": 1021,
            "grnd_level": 1004,
            "humidity": 30,
            "temp_kf": 0
          },
          "weather": [
            {
              "id": 800,
              "main": "Clear",
              "description": "clear sky",
              "icon": "01d"
            }
          ],
          "clouds": {
            "all": 0
          },
          "wind": {
            "speed": 3.5,
            "deg": 89,
            "gust": 4.17
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
            "pod": "d"
          },
          "dt_txt": "2021-07-06 15:00:00"
        },
        {
          "dt": 1625594400,
          "main": {
            "temp": 22.31,
            "feels_like": 21.88,
            "temp_min": 22.31,
            "temp_max": 22.31,
            "pressure": 1023,
            "sea_level": 1023,
            "grnd_level": 1005,
            "humidity": 49,
            "temp_kf": 0
          },
          "weather": [
            {
              "id": 800,
              "main": "Clear",
              "description": "clear sky",
              "icon": "01d"
            }
          ],
          "clouds": {
            "all": 0
          },
          "wind": {
            "speed": 3.18,
            "deg": 74,
            "gust": 7.55
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
            "pod": "d"
          },
          "dt_txt": "2021-07-06 18:00:00"
        },
        {
          "dt": 1625605200,
          "main": {
            "temp": 19.46,
            "feels_like": 18.98,
            "temp_min": 19.46,
            "temp_max": 19.46,
            "pressure": 1024,
            "sea_level": 1024,
            "grnd_level": 1006,
            "humidity": 58,
            "temp_kf": 0
          },
          "weather": [
            {
              "id": 800,
              "main": "Clear",
              "description": "clear sky",
              "icon": "01d"
            }
          ],
          "clouds": {
            "all": 0
          },
          "wind": {
            "speed": 1.66,
            "deg": 130,
            "gust": 2.92
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
            "pod": "d"
          },
          "dt_txt": "2021-07-06 21:00:00"
        },
        {
          "dt": 1625616000,
          "main": {
            "temp": 18.17,
            "feels_like": 17.61,
            "temp_min": 18.17,
            "temp_max": 18.17,
            "pressure": 1025,
            "sea_level": 1025,
            "grnd_level": 1007,
            "humidity": 60,
            "temp_kf": 0
          },
          "weather": [
            {
              "id": 800,
              "main": "Clear",
              "description": "clear sky",
              "icon": "01d"
            }
          ],
          "clouds": {
            "all": 0
          },
          "wind": {
            "speed": 0.86,
            "deg": 133,
            "gust": 0.89
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
            "pod": "d"
          },
          "dt_txt": "2021-07-07 00:00:00"
        },
        {
          "dt": 1625626800,
          "main": {
            "temp": 19.35,
            "feels_like": 18.83,
            "temp_min": 19.35,
            "temp_max": 19.35,
            "pressure": 1026,
            "sea_level": 1026,
            "grnd_level": 1008,
            "humidity": 57,
            "temp_kf": 0
          },
          "weather": [
            {
              "id": 800,
              "main": "Clear",
              "description": "clear sky",
              "icon": "01d"
            }
          ],
          "clouds": {
            "all": 4
          },
          "wind": {
            "speed": 0.19,
            "deg": 102,
            "gust": 0.25
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
            "pod": "d"
          },
          "dt_txt": "2021-07-07 03:00:00"
        },
        {
          "dt": 1625637600,
          "main": {
            "temp": 24.75,
            "feels_like": 24.32,
            "temp_min": 24.75,
            "temp_max": 24.75,
            "pressure": 1026,
            "sea_level": 1026,
            "grnd_level": 1009,
            "humidity": 40,
            "temp_kf": 0
          },
          "weather": [
            {
              "id": 800,
              "main": "Clear",
              "description": "clear sky",
              "icon": "01d"
            }
          ],
          "clouds": {
            "all": 5
          },
          "wind": {
            "speed": 0.46,
            "deg": 261,
            "gust": 0.57
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
            "pod": "d"
          },
          "dt_txt": "2021-07-07 06:00:00"
        }
      ],
      "city": {
        "id": 524901,
        "name": "Moscow",
        "coord": {
          "lat": 55.7522,
          "lon": 37.6156
        },
        "country": "RU",
        "population": 0,
        "timezone": 10800,
        "sunrise": 1625187032,
        "sunset": 1625249778
      }
    }


    service.getWeatherForCurrentCity(524901).subscribe((data:any)=>{
      expect(data).toEqual(cityData);
    });
    const req = httpMock.expectOne({ method: 'GET', url:'http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=1a7005e9b7dcda03b39628b0e7648cde&units=metric' });
    httpMock.verify();
  });
});
