import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers
import { LayoutComponent } from './containers';

const routes: Routes = [{
  path: '',
  component: LayoutComponent,
  data: {
    title: ''
  },
  children: [
    {
      path: '',
      data: {
        title: 'Home'
      },
      loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
    },
    {
      path: 'service',
      data: {
        title: 'Service AC'
      },
      loadChildren: () => import('./pages/service/service.module').then(m => m.ServiceModule)
    },
    {
      path: 'service-detail',
      data: {
        title: 'Service Detail'
      },
      loadChildren: () => import('./pages/service-detail/service-detail.module').then(m => m.ServiceDetailModule)
    },
    {
      path: 'checkout',
      data: {
        title: 'Konfirmasi Pemesanan'
      },
      loadChildren: () => import('./pages/checkout/checkout.module').then(m => m.CheckoutModule)
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
