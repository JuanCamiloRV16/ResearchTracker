import { CosasService } from './../../services/cosas.service';
import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/firestore';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { firestore } from 'firebase';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { asLiteral } from '@angular/compiler/src/render3/view/util';

@Component({
  selector: 'app-crear-proyecto',
  templateUrl: './crear-proyecto.component.html',
  styleUrls: ['./crear-proyecto.component.css']
})
export class CrearProyectoComponent implements OnInit {
  listaProyectos: Observable<any[]> | any;

  valorID = "";

  createProyecto: FormGroup;
  enviado = false;

  constructor(firestore: AngularFirestore, private fb: FormBuilder, private cosaService: CosasService) {
    this.listaProyectos = firestore.collection('proyectos').valueChanges();

    this.createProyecto = this.fb.group({
      nombre: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  getvalue() {
    alert(this.valorID);
  }

  borrarGrupo(id: string) {
    this.cosaService.borrarGrupo(id).then(() => {
      console.log('grupo eliminado con éxito');
    }).catch(error => {
      console.log(error);
    });
  }


  agregarProyecto() {
    this.enviado = true;

    if (this.createProyecto.invalid) {
      return;
    }
    const proyecto: any = {
      nombre: this.createProyecto.value.nombre
    }

    this.cosaService.agregarProyecto(proyecto).then(() => {
      console.log("Registro Exitoso!");
    }).catch(error => {
      console.log(error);
    })
  }

  hideC() {

    var crear = document.getElementById('crear');

    var actualizar = document.getElementById("actualizar");

    var borrar = document.getElementById("borrar");

    if (crear != null)

      crear.style.display = "block";

    if (actualizar != null)

      actualizar.style.display = "none";

    if (borrar != null)

      borrar.style.display = "none";
  }

  hideA() {
    var crear = document.getElementById('crear');

    var actualizar = document.getElementById("actualizar");

    var borrar = document.getElementById("borrar");

    if (crear != null)

      crear.style.display = "none";

    if (actualizar != null)

      actualizar.style.display = "block";

    if (borrar != null)

      borrar.style.display = "none";
  }

  hideB() {

    var crear = document.getElementById('crear');

    var actualizar = document.getElementById("actualizar");

    var borrar = document.getElementById("borrar");

    if (crear != null)

      crear.style.display = "none";

    if (actualizar != null)

      actualizar.style.display = "none";

    if (borrar != null)

      borrar.style.display = "block";
  }

}
