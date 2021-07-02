import { ComponentFixture, TestBed } from '@angular/core/testing';
import {Location} from '@angular/common';
import { CityWeatherComponent } from './city-weather.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing'
import { AppRoutingModule } from '../../app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { CommonHelperModule } from '../../common-helper.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('CityWeatherComponent', () => {
  let component: CityWeatherComponent;
  let fixture: ComponentFixture<CityWeatherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CityWeatherComponent ],
      imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        CommonHelperModule,
        BrowserAnimationsModule,
        RouterTestingModule
      ],
      providers:[HttpClient,RouterTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CityWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


});
