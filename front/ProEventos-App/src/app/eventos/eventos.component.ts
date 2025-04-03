import { NgFor, NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { FormsModule } from '@angular/forms';

interface Evento {
  eventoId: number;
  tema: string;
  imagemURL: string;
  [key: string]: any; // Para possíveis propriedades adicionais
}

@Component({
  selector: 'app-eventos',
  standalone: true,
  imports: [NgFor, NgIf, CollapseModule, FormsModule],
  templateUrl: './eventos.component.html',
  styleUrl: './eventos.component.scss',
})
export class EventosComponent {
  public eventos: any = [];
  public eventosFilter: any = [];
  widthImg: number = 150;
  marginImg: number = 2;
  showImg: boolean = true;
  private _filterList: string = '';

  public get filterList(): string {
    return this._filterList;
  }

  public set filterList(value: string) {
    this._filterList = value;
    this.eventosFilter = this.filterList ? this.filterEvents(this.filterList) : this.eventos;
  }

  filterEvents(filterFor: string):  Evento[] {
    filterFor = filterFor.toLocaleLowerCase();
    return this.eventos.filter(
      (evento: Evento) => evento.tema.toLocaleLowerCase().indexOf(filterFor) !== -1 
    )
  }

  ngOnInit(): void {
    this.getEventos();
  }

  changeImg(): void{
    this.showImg = !this.showImg;
  }

  constructor(private http: HttpClient){}



  public getEventos(): void {
    this.http.get('https://localhost:5001/api/eventos').subscribe(
      response => {
        this.eventos = response;
        this.eventosFilter = this.eventos;
      },
      error => console.log(error),
    );
  }
}
