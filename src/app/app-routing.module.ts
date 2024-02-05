import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QueryComponent } from './query/query.component';
import { ConnectComponent } from './connect/connect.component';
import { QueryparameterComponent } from './queryparameter/queryparameter.component';

const routes: Routes = [
  {path : 'connect', component: ConnectComponent},
  {path : 'query', component: QueryComponent},
  {path : 'query parameter', component:QueryparameterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
