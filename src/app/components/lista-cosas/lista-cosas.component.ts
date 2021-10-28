import { CosasService } from './../../services/cosas.service';
import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/firestore';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { firestore } from 'firebase';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-lista-cosas',
  templateUrl: './lista-cosas.component.html',
  styleUrls: ['./lista-cosas.component.css']
})
export class ListaCosasComponent implements OnInit {

  listaCosas: Observable<any[]> | any;
  listaEstudiantes: Observable<any[]> | any;

  createEstudiante: FormGroup;
  enviado = false;

  constructor(firestore: AngularFirestore, private fb: FormBuilder, private cosaService: CosasService) {
    this.listaCosas = firestore.collection('cosas').valueChanges();
    this.listaEstudiantes = firestore.collection('estudiantes').valueChanges();

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

}
