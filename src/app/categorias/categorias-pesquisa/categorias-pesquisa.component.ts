import { Component, OnInit } from '@angular/core';
import { CategoriasService } from '../categorias.service';
import { MessageService } from 'primeng/api';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-categorias-pesquisa',
  templateUrl: './categorias-pesquisa.component.html',
  styleUrls: ['./categorias-pesquisa.component.css']
})
export class CategoriasPesquisaComponent implements OnInit {
  categorias = [];
  filtro:string;

  constructor(
    private categoriasService: CategoriasService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
  ) { }

  ngOnInit() {
    this.pesquisar();
  }

  pesquisar() {
    this.categoriasService.pesquisar(this.filtro).then(data => this.categorias = data)
  }

  excluir(categoria: any) {
    this.confirmationService.confirm({
      message: 'Tem certeza que deseja excluir esse registro?',
      accept: () => {
        this.categoriasService.excluir(categoria.id).then(() => {
          this.pesquisar();
          this.messageService.add({severity:'success', summary:'Categoria excluída', detail:'Categoria excluída com sucesso'})
        });
      }
    });
  }
}
