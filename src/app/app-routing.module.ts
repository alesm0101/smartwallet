import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TransactionsComponent } from './transactions/transactions.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'transactions', component: TransactionsComponent },
  { path: '**', redirectTo: '/home' }
  /* 
  {
    path: 'lazy',
    loadChildren: () =>
      import('./lazy-module/lazy-module.module').then(
        (m) => m.LazyModule
      ),
  },
  { path: 'params/:id', component: RouteParamsComponent },
  {
    path: 'protected',
    component: ProtectedComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'child',
    component: AdminComponent,
    children: [
      { path: 'payroll', component: AdminPayrollComponent },
      { path: 'vacation', component: AdminVacationComponent },
    ],
  },
  */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
