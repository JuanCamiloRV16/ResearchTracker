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

  valor = "";


  constructor(firestore: AngularFirestore, private fb: FormBuilder, private cosaService: CosasService) {
    this.listaGrupos = firestore.collection('grupos').valueChanges({ idField: 'id' });

    this.createGrupo = this.fb.group({
      nombre: ['', Validators.required],
      area: ['', Validators.required],
      miembros: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  getvalue(event: any) {
    this.valor = event.target.value;
    alert(this.valor);
  }

  deleteGrupo() {
    this.borrarGrupo(this.valor);
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
      nombre: this.createGrupo.value.nombre,
      area: this.createGrupo.value.area,
      miembros: this.createGrupo.value.miembros
    }

    this.cosaService.agregarGrupos(grupo).then(() => {
      console.log("Registro Exitoso!");
    }).catch(error => {
      console.log(error);
    })
  }

  actualizarGrupo() {
    this.enviado = true;

    if (this.createGrupo.invalid) {
      return;
    }

    const evento: any = {
      nombre: this.createGrupo.value.nombre,
      area: this.createGrupo.value.area,
      miembros: this.createGrupo.value.miembros
    }
    this.cosaService.actualizarGrupo(this.valor, evento).then(() =>{
      console.log("Registro Exitoso!");
      alert("Se actualizo los datos");
    }).catch(error => {
      console.log(error);
    })
  }//cierra agregar cosa

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
