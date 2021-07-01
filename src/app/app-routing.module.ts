import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CityWeatherComponent } from './components/city-weather/city-weather.component';

const routes: Routes = [
  {path: 'cityWeather', component: CityWeatherComponent},
  {path: '**', component: DashboardComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
