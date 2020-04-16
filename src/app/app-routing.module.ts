import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './page/home-page/home-page.component';
import { ContactPageComponent } from './page/contact-page/contact-page.component';
import { ChartsComponent } from './page/charts/charts.component';
import { DetailsComponent } from './page/details/details.component';
import { EditPageComponent } from './page/edit-page/edit-page.component';
import { SignUpComponent } from './page/sign-up/sign-up.component';
import { AuthGuard } from './guards/auth.guard';


const routes: Routes = [
  {path:'', component: HomePageComponent, canActivate:[AuthGuard]},
  {path:'contact/:id', component: DetailsComponent, canActivate:[AuthGuard]},
  {path:'contact', component: ContactPageComponent, canActivate:[AuthGuard]},
  {path:'contact/edit/:id', component: EditPageComponent, canActivate:[AuthGuard]},
  {path:'charts', component: ChartsComponent, canActivate:[AuthGuard]},
  {path:'signUp', component: SignUpComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
