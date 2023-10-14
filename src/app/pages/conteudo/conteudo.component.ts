import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {dataFake} from '../../data/dataFake';

@Component({
  selector: 'app-conteudo',
  templateUrl: './conteudo.component.html',
  styleUrls: ['./conteudo.component.css']
})
export class ConteudoComponent implements OnInit {
  foto:string = "../../../assets/img4.jpg"
  caixaTitulo:string = "Humanos Viram Dragões"
  caixaDescricao:string = "Todos os humanos virarão dragões"
  private id:string | null = "0"

  constructor(
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( valor =>
     this.id = valor.get("id")
    )
    
    this.valorSetadoDosComponentes(this.id)
  }
  
  valorSetadoDosComponentes(id:string | null){
    const resultado = dataFake.filter(artigo => artigo.id.toString() == id)[0]

    this.caixaTitulo = resultado.titulo
    this.caixaDescricao = resultado.descricao
    this.foto = resultado.photo
  }
}
