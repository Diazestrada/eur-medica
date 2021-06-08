import { Component, OnInit, ViewChild } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';

import { MatPaginator } from '@angular/material/paginator';

import { MatTableDataSource } from '@angular/material/table';

import { PersonProvaiderService } from '../../services/person/person-provaider.service'

import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-list-person',
  templateUrl: './list-person.component.html',
  styleUrls: ['./list-person.component.scss']
})
export class ListPersonComponent implements OnInit {

  displayedColumns: string[] = ['primer_nombre', 'segundo_nombre', 'primer_apellido', 'segundo_apellido', 'codigo_interno'];
  dataSource: any;
  dataPerson: Array<any>[] = []
  resultsLength = 0

  @ViewChild(MatPaginator, { static: true }) paginator?: MatPaginator;

  constructor(
    public dialog: MatDialog,
    private personhtpp: PersonProvaiderService

  ) { }

  ngOnInit() {
    this.getAllPerson()
  }

  openDialog() {
    const dialogRef = this.dialog.open(ModalComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  getAllPerson() {
    this.personhtpp.getAllPerson().subscribe(
      response => {
        let data = JSON.stringify(response)
        let Datajson = JSON.parse(data)

        Datajson.data.map((item: any, index: number) => {
          this.dataPerson.push(item)
          this.dataSource = new MatTableDataSource<any>(this.dataPerson);
          this.dataSource.paginator = this.paginator;

        })
      }
    )
  }


}
