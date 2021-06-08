import { Component, OnInit } from '@angular/core';

import { EpsProvaiderService } from '../../services/eps/eps-provaider.service';
import { PersonProvaiderService } from '../../services/person/person-provaider.service';

import { FormGroup, FormControl, Validators } from '@angular/forms';



@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  typeDocuments: any = [
    { name: 'Cédula de Ciudadanía' },
    { name: 'Tarjeta de identidad' },
    { name: 'Cedula de extranjeria' },

  ];

  stateCivils: any = [
    { name: 'Solter@' },
    { name: 'Casad@' },
    { name: 'Viud@' },
  ];

  genders: any = [
    { name: 'Masculino' },
    { name: 'Femenino' },
    { name: 'Otros' },
  ];

  selectItem: any[] = []

  favoriteSeason: any;

  createForm: FormGroup;

  constructor(
    private epsHttp: EpsProvaiderService,
    private personHttp: PersonProvaiderService,
  ) {
    this.createForm = new FormGroup({
      primer_nombre: new FormControl("", Validators.required),
      segundo_nombre: new FormControl(""),
      primer_apellido: new FormControl("", Validators.required),
      segundo_apellido: new FormControl(""),
      numero: new FormControl(""),
      fecha_expedicion: new FormControl(""),
      lugar_expedicion: new FormControl(""),
      tipo: new FormControl(""),
      estado_civil: new FormControl(""),
      sexo: new FormControl(""),
      idEps: new FormControl(""),
    })
  }

  ngOnInit(): void {
    this.getAllEps()
  }


  getAllEps() {
    this.epsHttp.getAllEps().subscribe(
      response => {
        let data = JSON.stringify(response)
        let Datajson = JSON.parse(data)

        Datajson.data.map((item: any) => {
          this.selectItem.push(item)
        })
      }
    )
  }

  createPerson() {
    console.log(this.createForm.value)
    const body = {
      primer_nombre: this.createForm.controls['primer_nombre'].value,
      segundo_nombre: this.createForm.controls['segundo_nombre'].value,
      primer_apellido: this.createForm.controls['primer_apellido'].value,
      segundo_apellido: this.createForm.controls['segundo_apellido'].value,
      codigo_interno: this.createForm.controls['numero'].value,
      identificacion: {
        numero: this.createForm.controls['numero'].value,
        fecha_expedicion: this.createForm.controls['fecha_expedicion'].value,
        lugar_expedicion: this.createForm.controls['lugar_expedicion'].value,
        tipo: this.createForm.controls['tipo'].value,
      },
      estado_civil: this.createForm.controls['estado_civil'].value,
      sexo: this.createForm.controls['sexo'].value,
      core_eps: [{
        idEps: this.createForm.controls['idEps'].value,
        fecha_ingresa: new Date(),
        estado_afiacion: 'Activo',
      }],

    }
    this.personHttp.createPerson(body).subscribe(
      response => {
        console.log(response)
      },
      error => {
        console.error(error)
      }
    )
  }



}
