import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {SchenduleComponent} from './pages/schendule.component';
import {EventComponent} from './event/event.component';
import {EventListComponent} from './event-list/event-list.component';
import {CalendarComponent} from './calendar/calendar.component';

const schenduleRoutes = [
  {
    path: '',
    component: SchenduleComponent,
    children: [
      {path: 'criar-evento', component: EventComponent},
      {path: 'dashboard', component: EventListComponent},
      {path: 'calendar', component: CalendarComponent}
    ]
  }];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(schenduleRoutes)
  ]
})
export class SchenduleRoutingModule { }
