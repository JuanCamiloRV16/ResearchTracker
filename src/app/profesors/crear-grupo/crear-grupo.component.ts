import { CosasService } from './../../services/cosas.service';
import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/firestore';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { firestore } from 'firebase';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-crear-grupo',
  templateUrl: './crear-grupo.component.html',
  styleUrls: ['./crear-grupo.component.css']
})
export class CrearGrupoComponent implements OnInit {
  listaGrupos: Observable<any[]> | any;

  createGrupo: FormGroup;
  enviado = false;

  selectedOption: string = "";


  constructor(firestore: AngularFirestore, private fb: FormBuilder, private cosaService: CosasService) {
    this.listaGrupos = firestore.collection('grupos').valueChanges();

    this.createGrupo = this.fb.group({
      nombre: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  borrarGrupo(id: string) {
    this.cosaService.borrarGrupo(id).then(() => {
      console.log('grupo eliminado con éxito');
    }).catch(error => {
      console.log(error);
    });
  }

  agregarGrupos() {
    this.enviado = true;

    if (this.createGrupo.invalid) {
      return;
    }
    const grupo: any = {
      nombre: this.createGrupo.value.nombre
    }

    this.cosaService.agregarGrupos(grupo).then(() => {
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
    alert("hello");
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
