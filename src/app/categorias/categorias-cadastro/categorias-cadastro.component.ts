import { Component, OnInit } from '@angular/core';
import { Categoria } from '../model';
import { FormControl } from '@angular/forms';
import { CategoriasService } from '../categorias.service';
import { MessageService } from 'primeng/api';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-categorias-cadastro',
  templateUrl: './categorias-cadastro.component.html',
  styleUrls: ['./categorias-cadastro.component.css']
})
export class CategoriasCadastroComponent implements OnInit {
  categoria = new Categoria();

  constructor(
    private categoriasService: CategoriasService,
    private messageService: MessageService,
    private rota: ActivatedRoute
  ) {

  }

  ngOnInit() {
    const { id } = this.rota.snapshot.params;
    if (id) {
      this.carregarCategoria(id);
    }
  }

  async carregarCategoria(id:number){
    this.categoria = await this.categoriasService.buscarPorCodigo(id);
  }

  async alterar(form: FormControl) {
    try {
      await this.categoriasService.alterar(this.categoria)

      this.messageService.add({
        severity:'success',
        summary:'Edição',
        detail:'Categoria ' + this.categoria.nome + ' alterada'
      });

      form.reset();
    } catch (err) {
      throw err;
    }
  }

  salvar(form: FormControl) {
    if (this.editando) {
      return this.alterar(form);
    }

    return this.inserir(form);
  }

  async inserir(form: FormControl) {
    await this.categoriasService.adicionar(this.categoria)

    this.messageService.add({
      severity:'success',
      summary:'Cadastro',
      detail:'Categoria ' + this.categoria.nome + ' cadastrada'
    });

    form.reset();
  }

  get editando(){
    return Boolean(this.categoria.id);
  }

}
