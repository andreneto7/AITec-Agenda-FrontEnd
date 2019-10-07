import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';

const coreRoutes = [
  {path: '', loadChildren: '../home/home.module#HomeModule'},
  {path: 'logon', loadChildren: '../user/user.module#UserModule'},
  {path: 'schendule', loadChildren: '../schendule/schendule.module#SchenduleModule'}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(coreRoutes)
  ],
  exports: []
})
export class CoreRoutingModule { }
