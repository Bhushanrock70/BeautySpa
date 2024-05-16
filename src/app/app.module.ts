import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewAllHairCareComponent } from './Component/myservices/haircare/view-all-hair-care/view-all-hair-care.component';
import { HomeComponent } from './Component/navbar/home/home.component';
import { HeaderComponent } from './Component/navbar/header/header.component';
import { ViewAllSkinCareComponent } from './Component/myservices/skincare/view-all-skin-care/view-all-skin-care.component';
import { HairDashboardComponent } from './Component/myservices/haircare/hair-dashboard/hair-dashboard.component';
import { HairCareHimComponent } from './Component/myservices/haircare/hair-care-him/hair-care-him.component';
import { SkinCarehimComponent } from './Component/myservices/skincare/skin-carehim/skin-carehim.component';
import { SkindashboardComponent } from './Component/myservices/skincare/skindashboard/skindashboard.component';
import { BodyDashboardComponent } from './Component/myservices/bodycare/body-dashboard/body-dashboard.component';
import { BodyCareHimComponent } from './Component/myservices/bodycare/body-care-him/body-care-him.component';
import { ViewallbodycareComponent } from './Component/myservices/bodycare/viewallbodycare/viewallbodycare.component';
import { AboutusComponent } from './Component/navbar/header/aboutus/aboutus.component';
import { FooterComponent } from './Component/navbar/footer/footer.component';
import { HairPricetagComponent } from './Component/myservices/haircare/hair-pricetag/hair-pricetag.component';
import {HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './Component/navbar/header/Login/login/login.component';
import { RegisterComponent } from './Component/navbar/header/Register/register/register.component';
import { ServiceCardComponent } from './Component/Testjson/service-card/service-card.component';
@NgModule({
  declarations: [
    AppComponent,
    ViewAllHairCareComponent,
    HomeComponent,
    HeaderComponent,
    ViewAllSkinCareComponent,
    HairDashboardComponent,
    HairCareHimComponent,
    SkinCarehimComponent,
    SkindashboardComponent,
    BodyDashboardComponent,
    BodyCareHimComponent,
    ViewallbodycareComponent,
    AboutusComponent,
    FooterComponent,
    HairPricetagComponent,
    LoginComponent,
    RegisterComponent,
    ServiceCardComponent
    
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
