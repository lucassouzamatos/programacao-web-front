import { Component, OnInit } from '@angular/core';
import { CategoriasService } from '../categorias.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-categorias-pesquisa',
  templateUrl: './categorias-pesquisa.component.html',
  styleUrls: ['./categorias-pesquisa.component.css']
})
export class CategoriasPesquisaComponent implements OnInit {
  categorias = [];

  constructor(private categoriasService: CategoriasService, private messageService: MessageService) { }

  ngOnInit() {
    this.pesquisar();
  }

  pesquisar() {
    this.categoriasService.pesquisar().then(data => this.categorias = data)
  }

  excluir(categoria: any) {
    this.categoriasService.excluir(categoria.id).then(() => {
      this.pesquisar();
      this.messageService.add({severity:'success', summary:'Categoria excluída', detail:'Categoria excluída com sucesso'})
    });
  }
}
