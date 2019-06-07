import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PersonDashboardComponent } from "./containers/person-dashboard/person-dashboard.component";
import { PersonCountComponent } from "./components/person-count/person-count.component";
import { PersonDetailComponent } from "./components/person-detail/person-detail.component";

@NgModule({
  declarations: [
    PersonDashboardComponent,
    PersonCountComponent,
    PersonDetailComponent
  ],
  imports: [CommonModule],
  exports: [PersonDashboardComponent]
})
export class PersonDashboardModule {}
