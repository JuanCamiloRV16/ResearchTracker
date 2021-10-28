import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmailPageComponent } from './email-page/email-page.component';
import { SignUppageComponent } from './sign-uppage/sign-uppage.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { ListaCosasComponent } from './components/lista-cosas/lista-cosas.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NuevaCosaComponent } from './components/nueva-cosa/nueva-cosa.component';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginpageComponent },
  { path: 'email-login', component: EmailPageComponent },
  { path: 'signup', component: SignUppageComponent },
  { path: 'profile', component: ProfilePageComponent },
  { path: 'lista-cosas', component: ListaCosasComponent},
  { path: 'nav-bar', component: NavbarComponent},
  { path: 'nueva-cosa', component: NuevaCosaComponent},
  { path: 'home', component: HomepageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
