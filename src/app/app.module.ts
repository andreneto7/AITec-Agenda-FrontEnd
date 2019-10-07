import { BrowserModule } from '@angular/platform-browser';
import { NgModule , APP_BOOTSTRAP_LISTENER} from '@angular/core';

import { AppComponent } from './app.component';
import {CoreModule} from './core/core.module';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    RouterModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
