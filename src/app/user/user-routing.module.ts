import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {LogonComponent} from './logon/logon.component';
import {RegisterComponent} from './register/register.component';

const userRoutes = [
  {path: '', component: LogonComponent },
  {path: 'register', component: RegisterComponent }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(userRoutes)
  ]
})
export class UserRoutingModule { }
