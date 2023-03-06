import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrdersinprocessComponent } from './pages/ordersinprocess/ordersinprocess.component';
import { PendingordersComponent } from './pages/pendingorders/pendingorders.component';

const routes: Routes = [
  {path: '', component: PendingordersComponent},
  {path: 'ordersinprocess', component: OrdersinprocessComponent},
  {path: '**', redirectTo: '/'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
