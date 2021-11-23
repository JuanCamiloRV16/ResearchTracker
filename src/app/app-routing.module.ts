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
import { CrearGrupoComponent } from './profesors/crear-grupo/crear-grupo.component';
import { AgregarEstudiantesComponent } from './profesors/agregar-estudiantes/agregar-estudiantes.component';
import { AsignarTareaComponent } from './profesors/asignar-tarea/asignar-tarea.component';
import { FormsModule }   from '@angular/forms';
import { ConsultarProfesorComponent } from './profesors/consultar-profesor/consultar-profesor.component';
import { ConsultarEstudianteComponent } from './estudiantes/consultar-estudiante/consultar-estudiante.component';
import { CrearProyectoComponent } from './estudiantes/crear-proyecto/crear-proyecto.component';
import { RegistrarAvanceComponent } from './estudiantes/registrar-avance/registrar-avance.component';
import { RegistrarEventoComponent } from './estudiantes/registrar-evento/registrar-evento.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginpageComponent },
  { path: 'email-login', component: EmailPageComponent },
  { path: 'signup', component: SignUppageComponent },
  { path: 'profile', component: ProfilePageComponent },
  { path: 'lista-cosas', component: ListaCosasComponent},
  { path: 'nav-bar', component: NavbarComponent},
  { path: 'nueva-cosa', component: NuevaCosaComponent},
  { path: 'home', component: HomepageComponent},
  { path: 'crear-grupo', component: CrearGrupoComponent},
  { path: 'agregar-estudiantes', component: AgregarEstudiantesComponent},
  { path: 'asignar-tarea', component: AsignarTareaComponent},
  { path: 'consultar-profesor', component: ConsultarProfesorComponent},
  { path: 'crear-proyecto', component: CrearProyectoComponent},
  { path: 'registrar-avance', component: RegistrarAvanceComponent},
  { path: 'registrar-evento', component: RegistrarEventoComponent},
  { path: 'consultar-estudiante', component: ConsultarEstudianteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
