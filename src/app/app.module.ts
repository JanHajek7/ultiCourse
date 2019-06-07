import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { PersonDashboardModule } from "./person-dashboard/person-dashboard.module";

import { AppComponent } from "./app.component";
import { FormsModule } from "@angular/forms";
import { AppDashboardComponent } from "./app-dashboard/app-dashboard.component";
import { AppDetailComponent } from "./app-dashboard/app-detail/app-detail.component";

import { RouterModule, Routes } from "@angular/router";

const appRoutes: Routes = [
  { path: "seznam", component: AppDashboardComponent }
];

@NgModule({
  declarations: [AppComponent, AppDashboardComponent, AppDetailComponent],
  imports: [
    // angular modules
    BrowserModule,
    FormsModule,
    // custom modules
    PersonDashboardModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
