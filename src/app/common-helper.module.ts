import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule} from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import {MatGridListModule} from '@angular/material/grid-list';
import { FahrenheitPipe } from './pipes/fahrenheit.pipe';

//This Module will bebused for all Custom pipes material modules  and etc

const pipes:any = [
  FahrenheitPipe
]

const MAT_MODULES = [

    MatCardModule,
]

@NgModule({
  declarations: [...pipes],
  imports: [
    CommonModule,
    ...MAT_MODULES,

  ],
  exports:[...MAT_MODULES, ...pipes]
})
export class CommonHelperModule { }
