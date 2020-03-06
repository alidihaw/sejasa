import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ServiceDetailComponent } from "./service-detail.component";

const routes: Routes = [
  {
    path: "",
    component: ServiceDetailComponent,
    data: {
      title: 'Service Detail'
    },
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServiceDetailRoutingModule {}
