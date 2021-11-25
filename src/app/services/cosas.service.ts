import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CosasService {

  constructor(private firestore: AngularFirestore) { }

  agregarProyecto(proyecto: any): Promise<any> {
    return this.firestore.collection('proyectos').add(proyecto);
  }

  actualizarProyecto(id: string, data: any): Promise<any> {
    return this.firestore.collection('proyectos').doc(id).update(data);
  }

  borrarProyecto(id: string): Promise<any> {
    return this.firestore.collection('proyectos').doc(id).delete();
  }

  leerProyecto(id: string): Observable<any> {
    return this.firestore.collection('proyectos').doc(id).snapshotChanges();
  }

  agregarCosa(cosa: any): Promise<any> {
    return this.firestore.collection('cosas').add(cosa);
  }

  agregarGrupos(grupo: any): Promise<any> {
    return this.firestore.collection('grupos').add(grupo);
  }

  actualizarGrupo(id: string, data: any): Promise<any> {
    return this.firestore.collection('grupos').doc(id).update(data);
  }

  borrarGrupo(id: string): Promise<any> {
    return this.firestore.collection('grupos').doc(id).delete();
  }

  agregarEvento(evento: any): Promise<any> {
    return this.firestore.collection('eventos').add(evento);
  }

  actualizarEvento(id: string, data: any): Promise<any> {
    return this.firestore.collection('eventos').doc(id).update(data);
  }

  borrarEvento(id: string): Promise<any> {
    return this.firestore.collection('eventos').doc(id).delete();
  }

  agregarTarea(idDocumento: string, coleccion: string, descripcionTarea: string, nombreTarea: string) {

    const tarea = {

      descripcion: descripcionTarea,

      nombre: nombreTarea

    }

    return this.firestore.collection(coleccion).doc(idDocumento).collection<any>("tareas").doc().set({ tarea })

      .then(function () {

        console.log("Tarea creada.");

      })

      .catch(function (error) {

        console.error("Error creando la tarea: ", error);

      });

  }

  agregarEstudiante(estudiante: any): Promise<any> {
    return this.firestore.collection('estudiantes').add(estudiante);
  }


}
