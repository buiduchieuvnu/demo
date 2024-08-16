import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbPaginationModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from '../layouts/components/header/header.component';
import { FooterComponent } from '../layouts/components/footer/footer.component';
import { BannerComponent } from '../layouts/components/banner/banner.component';
import { NavbarComponent } from '../layouts/components/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { ServiceComponent } from './pages/service/service.component';
import { nameDoctorComponent} from './pages/nameDoctor/nameDoctor.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ServiceComponent,
    nameDoctorComponent,
    HeaderComponent,
    FooterComponent,
    BannerComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgbPaginationModule,
    NgbAlertModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
