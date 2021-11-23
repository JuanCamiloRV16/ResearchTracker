import { Component, OnInit } from '@angular/core';
import { CosasService } from './../../services/cosas.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-asignar-tarea',
  templateUrl: './asignar-tarea.component.html',
  styleUrls: ['./asignar-tarea.component.css']
})
export class AsignarTareaComponent implements OnInit {

  createGrupo: FormGroup;
  enviado = false;

  constructor(private fb: FormBuilder, private cosaService: CosasService) {
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
