import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CosasService {

  constructor(private firestore: AngularFirestore) { }

  agregarProyecto(proyecto: any): Promise<any>{
    return this.firestore.collection('proyectos').add(proyecto);
  }

  agregarCosa(cosa: any): Promise<any>{
    return this.firestore.collection('cosas').add(cosa);
  }

  agregarGrupos(grupo: any): Promise<any>{
    return this.firestore.collection('grupos').add(grupo);
  }

  actualizarGrupo() {
    
  }

  borrarGrupo(id: string): Promise<any>{
    return this.firestore.collection('grupos').doc(id).delete();
  }

  agregarEstudiante(estudiante: any): Promise<any>{
    return this.firestore.collection('estudiantes').add(estudiante);
  }

  
}
