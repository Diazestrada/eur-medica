import { Component, OnInit, ViewChild } from '@angular/core';
import { EpsProvaiderService } from '../../services/eps/eps-provaider.service'

import { MatPaginator } from '@angular/material/paginator';

import { MatTableDataSource } from '@angular/material/table';

export interface EpsElment {
  codigo: string;
  entidad: string;
  nit: string;
  regimen_codigo: string;
  regimen_descripcion: string;
  _id: string
}


@Component({
  selector: 'app-list-eps',
  templateUrl: './list-eps.component.html',
  styleUrls: ['./list-eps.component.scss']
})
export class ListEpsComponent implements OnInit {

  displayedColumns: string[] = ['codigo', 'nit', 'entidad', 'regimen_descripcion'];
  // displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource: any;
  dataEps: EpsElment[] = []
  resultsLength = 0

  @ViewChild(MatPaginator, { static: true }) paginator?: MatPaginator;


  constructor(
    private epsHttp: EpsProvaiderService,
  ) { }

  ngOnInit() {
    this.getAllEps()

  }

  getAllEps() {
    this.epsHttp.getAllEps().subscribe(
      response => {
        let data = JSON.stringify(response)
        let Datajson = JSON.parse(data)

        Datajson.data.map((item: any, index: number) => {
          this.dataEps.push(item)
          this.dataSource = new MatTableDataSource<EpsElment>(this.dataEps);
          this.dataSource.paginator = this.paginator;

        })

      }
    )

  }

}
