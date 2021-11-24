import { AuthService } from './auth.service';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { EmailPageComponent } from './email-page/email-page.component';
import { SignUppageComponent } from './sign-uppage/sign-uppage.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';

import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { ListaCosasComponent } from './components/lista-cosas/lista-cosas.component';
import { NuevaCosaComponent } from './components/nueva-cosa/nueva-cosa.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CrearGrupoComponent } from './profesors/crear-grupo/crear-grupo.component';
import { AgregarEstudiantesComponent } from './profesors/agregar-estudiantes/agregar-estudiantes.component';
import { CrearProyectoComponent } from './estudiantes/crear-proyecto/crear-proyecto.component';
import { RegistrarEventoComponent } from './estudiantes/registrar-evento/registrar-evento.component';
import { RegistrarAvanceComponent } from './estudiantes/registrar-avance/registrar-avance.component';
import { AsignarTareaComponent } from './profesors/asignar-tarea/asignar-tarea.component';
import { ConsultarProfesorComponent } from './profesors/consultar-profesor/consultar-profesor.component';
import { ConsultarEstudianteComponent } from './estudiantes/consultar-estudiante/consultar-estudiante.component';
import { NavbarEstudianteComponent } from './estudiantes/navbar-estudiante/navbar-estudiante.component';
import { NavbarProfesorComponent } from './profesors/navbar-profesor/navbar-profesor.component';
import { EditorModule } from '@tinymce/tinymce-angular';

const firebaseConfig = {
  apiKey: "AIzaSyBCQpcTEgmJZMlF3NSV9acgoRvjk1p6pNg",
  authDomain: "my-app-57251.firebaseapp.com",
  projectId: "my-app-57251",
  storageBucket: "my-app-57251.appspot.com",
  messagingSenderId: "621553579332",
  appId: "1:621553579332:web:6145a36e8c7448570a9311"
};

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    LoginpageComponent,
    SignUppageComponent,
    EmailPageComponent,
    ProfilePageComponent,
    ListaCosasComponent,
    NuevaCosaComponent,
    NavbarComponent,
    CrearGrupoComponent,
    AgregarEstudiantesComponent,
    AsignarTareaComponent,
    CrearProyectoComponent,
    RegistrarEventoComponent,
    RegistrarAvanceComponent,
    ConsultarProfesorComponent,
    ConsultarEstudianteComponent,
    NavbarEstudianteComponent,
    NavbarProfesorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    EditorModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
