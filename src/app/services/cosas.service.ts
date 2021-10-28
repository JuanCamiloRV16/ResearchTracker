import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CosasService {

  constructor(private firestore: AngularFirestore) { }

  agregarCosa(cosa: any): Promise<any>{
    return this.firestore.collection('cosas').add(cosa);
  }

  agregarEstudiante(estudiante: any): Promise<any>{
    return this.firestore.collection('estudiantes').add(estudiante);
  }

}
