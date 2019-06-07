import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AppDashboardComponent } from "./app-dashboard.component";
import { AppDetailComponent } from "./app-detail/app-detail.component";

@NgModule({
  declarations: [AppDashboardComponent, AppDetailComponent],
  imports: [CommonModule],
  exports: [AppDashboardComponent]
})
export class AppDasboardModule {}
