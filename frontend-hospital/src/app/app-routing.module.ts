import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServiceComponent } from './pages/service/service.component';
import { HomeComponent } from './pages/home/home.component';
import { nameDoctorComponent } from './pages/nameDoctor/nameDoctor.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'service', component: ServiceComponent},
  {
    path: 'nameDoctor', component: nameDoctorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
