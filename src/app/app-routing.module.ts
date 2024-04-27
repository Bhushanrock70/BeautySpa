import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Component/navbar/home/home.component';
import { ViewAllHairCareComponent } from './Component/myservices/haircare/view-all-hair-care/view-all-hair-care.component';
import { ViewAllSkinCareComponent } from './Component/myservices/skincare/view-all-skin-care/view-all-skin-care.component';
import { HairDashboardComponent } from './Component/myservices/haircare/hair-dashboard/hair-dashboard.component';
import { HairCareHimComponent } from './Component/myservices/haircare/hair-care-him/hair-care-him.component';
import { SkindashboardComponent } from './Component/myservices/skincare/skindashboard/skindashboard.component';
import { SkinCarehimComponent } from './Component/myservices/skincare/skin-carehim/skin-carehim.component';
import { ViewallbodycareComponent } from './Component/myservices/bodycare/viewallbodycare/viewallbodycare.component';
import { BodyDashboardComponent } from './Component/myservices/bodycare/body-dashboard/body-dashboard.component';
import { BodyCareHimComponent } from './Component/myservices/bodycare/body-care-him/body-care-him.component';
import { AboutusComponent } from './Component/navbar/header/aboutus/aboutus.component';
import { HairPricetagComponent } from './Component/myservices/haircare/hair-pricetag/hair-pricetag.component';

const routes: Routes = [

  {path: 'hairdashboard', component: HairDashboardComponent,
    children: [
  {path: 'hairher', component:ViewAllHairCareComponent},
  {path: 'hairhim' , component: HairCareHimComponent},
  {path: '', component: HairCareHimComponent}
    ]},

  {path: 'skindashboard', component: SkindashboardComponent,
    children:[
  {path: 'skinher', component:ViewAllSkinCareComponent},
  {path: 'skinhim', component: SkinCarehimComponent},
  {path: '', component: SkinCarehimComponent}
    ]},

  {path: 'bodydashboard', component: BodyDashboardComponent,
    children: [
      {path: 'bodyher', component: ViewallbodycareComponent},
      {path: 'bodyhim', component: BodyCareHimComponent},
      {path: '', component: BodyCareHimComponent}
    ]},
  {path: '', component: HomeComponent},
  {path: 'a', component: AboutusComponent},
  {path: 'hairherprice', component: HairPricetagComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
