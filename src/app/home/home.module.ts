import { NgModule } from '@angular/core';
import { HomeComponent } from './pages/home/home.component';
import { HomeRoutingModule } from './home-routing.module';
import {SharedModule} from '../shared/shared.module';
import {HeaderComponent} from '../shared/components/header/header.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    SharedModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
