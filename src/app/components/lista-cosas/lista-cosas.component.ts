import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/firestore';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { firestore } from 'firebase';

@Component({
  selector: 'app-lista-cosas',
  templateUrl: './lista-cosas.component.html',
  styleUrls: ['./lista-cosas.component.css']
})
export class ListaCosasComponent implements OnInit {

  listaCosas: Observable<any[]> | any;
  listaEstudiantes: Observable<any[]> | any;

  constructor(firestore: AngularFirestore) {
    this.listaCosas = firestore.collection('cosas').valueChanges();
    this.listaEstudiantes = firestore.collection('estudiantes').valueChanges();
  }

  ngOnInit(): void {
  }

}
