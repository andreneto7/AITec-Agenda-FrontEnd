import { NgModule } from '@angular/core';
import { UserRoutingModule } from './user-routing.module';
import { LogonComponent } from './logon/logon.component';
import {SharedModule} from '../shared/shared.module';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {HttpClient} from '@angular/common/http';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { RegisterComponent } from './register/register.component';

@NgModule({
  imports: [
    SharedModule,
    UserRoutingModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: (http: HttpClient) => new TranslateHttpLoader(http, './assets/i18n/', '.json'),
        deps: [HttpClient]}
    })
  ],
  declarations: [LogonComponent, RegisterComponent]
})
export class UserModule { }
