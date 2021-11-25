import { CosasService } from './../../services/cosas.service';
import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/firestore';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { firestore } from 'firebase';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-asignar-tarea',
  templateUrl: './asignar-tarea.component.html',
  styleUrls: ['./asignar-tarea.component.css']
})
export class AsignarTareaComponent implements OnInit {

  listaGrupos: Observable<any[]> | any;
  listaEstudiantes: Observable<any[]> | any;
  listaProyectos: Observable<any[]> | any;

  createEstudiante: FormGroup;
  enviado = false;

  constructor(firestore: AngularFirestore, private fb: FormBuilder, private cosaService: CosasService) {
    this.listaGrupos = firestore.collection('grupos').valueChanges();
    this.listaEstudiantes = firestore.collection('estudiantes').valueChanges();
    this.listaProyectos = firestore.collection('proyectos').valueChanges();

    this.createEstudiante = this.fb.group({
      nombre: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  agregarEstudiante() {
    this.enviado = true;

    

    if(this.createEstudiante.invalid){
      return;
    }
    const estudiante: any = {
      nombre: this.createEstudiante.value.nombre
    }

    this.cosaService.agregarEstudiante(estudiante).then(() => {
      console.log("Registro Exitoso!");
    }).catch(error => {
      console.log(error);
    })
  }

  hideC() {

    var crear = document.getElementById('crear');

    var leer = document.getElementById("leer");

    var actualizar = document.getElementById("actualizar");

    var borrar = document.getElementById("borrar");

    if (crear != null)

      crear.style.display = "block";
    
    if (leer != null)
      leer.style.display = "none";

    if (actualizar != null)

      actualizar.style.display = "none";

    if (borrar != null)

      borrar.style.display = "none";
  }

  hideL() {

    var crear = document.getElementById('crear');

    var leer = document.getElementById("leer");

    var actualizar = document.getElementById("actualizar");

    var borrar = document.getElementById("borrar");

    if (crear != null)

      crear.style.display = "none";
    
    if (leer != null)
      leer.style.display = "block";

    if (actualizar != null)

      actualizar.style.display = "none";

    if (borrar != null)

      borrar.style.display = "none";
  }

  hideA() {
    var crear = document.getElementById('crear');

    var leer = document.getElementById("leer");

    var actualizar = document.getElementById("actualizar");

    var borrar = document.getElementById("borrar");

    if (crear != null)

      crear.style.display = "none";
    
    if (leer != null)
      leer.style.display = "none";

    if (actualizar != null)

      actualizar.style.display = "block";

    if (borrar != null)

      borrar.style.display = "none";
  }

  hideB() {
    var crear = document.getElementById('crear');

    var leer = document.getElementById("leer");

    var actualizar = document.getElementById("actualizar");

    var borrar = document.getElementById("borrar");

    if (crear != null)

      crear.style.display = "none";
    
    if (leer != null)
      leer.style.display = "none";

    if (actualizar != null)

      actualizar.style.display = "none";

    if (borrar != null)

      borrar.style.display = "block";
  }
}
