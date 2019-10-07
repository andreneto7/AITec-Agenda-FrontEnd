import { NgModule } from '@angular/core';
import { SchenduleComponent } from './pages/schendule.component';
import { EventComponent } from './event/event.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import {SharedModule} from '../shared/shared.module';
import { SchenduleRoutingModule } from './schendule-routing.module';
import { CalendarComponent } from './calendar/calendar.component';
import { EventListComponent } from './event-list/event-list.component';
import { EventItemComponent } from './event-item/event-item.component';
import { SearchResultComponent } from './pages/search-result/search-result.component';

@NgModule({
  imports: [
    SharedModule,
    SchenduleRoutingModule
  ],
  declarations: [SchenduleComponent, EventComponent, DashboardComponent, CalendarComponent, EventListComponent, EventItemComponent, SearchResultComponent]
})
export class SchenduleModule { }
