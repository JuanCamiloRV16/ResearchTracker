import { Component, OnInit } from '@angular/core';
import { CosasService } from './../../services/cosas.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { firestore } from 'firebase';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/firestore';


@Component({
  selector: 'app-consultar-estudiante',
  templateUrl: './consultar-estudiante.component.html',
  styleUrls: ['./consultar-estudiante.component.css']
})
export class ConsultarEstudianteComponent implements OnInit {
  listaProyectos: Observable<any[]> | any;

  createGrupo: FormGroup;
  enviado = false;

  constructor(firestore: AngularFirestore, private fb: FormBuilder, private cosaService: CosasService) {
    this.listaProyectos = firestore.collection('proyectos').valueChanges();

    this.createGrupo = this.fb.group({
      nombre: ['', Validators.required]
    });
  }

  ngOnInit(): void {

  }

  agregarGrupos() {
    this.enviado = true;

    if(this.createGrupo.invalid){
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
}
