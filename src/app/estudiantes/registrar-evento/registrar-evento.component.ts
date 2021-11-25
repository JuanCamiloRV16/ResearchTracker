import { Component, OnInit } from '@angular/core';
import { CosasService } from './../../services/cosas.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { firestore } from 'firebase';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/firestore';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-registrar-evento',
  templateUrl: './registrar-evento.component.html',
  styleUrls: ['./registrar-evento.component.css']
})
export class RegistrarEventoComponent implements OnInit {
  listaProyectos: Observable<any[]> | any;
  listaEstudiantes: Observable<any[]> | any;
  listaEventos: Observable<any[]> | any;

  createEvento: FormGroup;
  enviado = false;

  valor = "";

  id: string | null;

  constructor(firestore: AngularFirestore, private fb: FormBuilder, private cosaService: CosasService, private aRoute: ActivatedRoute) {
    this.listaProyectos = firestore.collection('proyectos').valueChanges({ idField: 'id' });
    this.listaEstudiantes = firestore.collection('estudiantes').valueChanges({ idField: 'id' });
    this.listaEventos = firestore.collection('eventos').valueChanges({ idField: 'id' });
    this.id = this.aRoute.snapshot.paramMap.get('id');

    this.createEvento = this.fb.group({
      nombre: ['', Validators.required],
      tipo: ['', Validators.required],
      lugar: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  getvalue(event: any) {
    this.valor = event.target.value;
    //alert(this.valor);
  }

  deleteEvento() {
    this.borrarEvento(this.valor);
  }

  borrarEvento(id: string) {
    this.cosaService.borrarEvento(id).then(() => {
      console.log('grupo eliminado con éxito');
    }).catch(error => {
      console.log(error);
    });
  }

  agregarEvento() {
    this.enviado = true;

    if (this.createEvento.invalid) {
      return;
    }
    const evento: any = {
      nombre: this.createEvento.value.nombre,
      tipo: this.createEvento.value.tipo,
      lugar: this.createEvento.value.lugar
    }

    alert("Se creo un evento");

    this.cosaService.agregarEvento(evento).then(() => {
      console.log("Registro Exitoso!");
    }).catch(error => {
      console.log(error);
    })
  }

  actualizarEvento() {
    this.enviado = true;

    if (this.createEvento.invalid) {
      return;
    }

    const evento: any = {
      nombre: this.createEvento.value.nombre,
      tipo: this.createEvento.value.tipo,
      lugar: this.createEvento.value.lugar
    }
    this.cosaService.actualizarEvento(this.valor, evento).then(() =>{
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
