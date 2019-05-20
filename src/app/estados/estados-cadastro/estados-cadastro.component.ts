import { Component, OnInit } from '@angular/core';
import { Estado } from '../model';
import { MessageService } from 'primeng/api';
import { ActivatedRoute } from '@angular/router';
import { EstadosService } from '../estados.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-estados-cadastro',
  templateUrl: './estados-cadastro.component.html',
  styleUrls: ['./estados-cadastro.component.css']
})
export class EstadosCadastroComponent implements OnInit {
  estado = new Estado();

  constructor(
    private estadosService: EstadosService,
    private messageService: MessageService,
    private rota: ActivatedRoute
  ) { }

  ngOnInit() {
    const { id } = this.rota.snapshot.params;
    if (id) {
      this.carregarEstado(id);
    }
  }

  async carregarEstado(id:number){
    this.estado = await this.estadosService.buscarPorCodigo(id);
  }

  async alterar(form: FormControl) {
    try {
      await this.estadosService.alterar(this.estado)

      this.messageService.add({
        severity: 'success',
        summary: 'Edição',
        detail: `Estado ${this.estado.nome} alterado com sucesso!`
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
    await this.estadosService.adicionar(this.estado)

    this.messageService.add({
      severity: 'success',
      summary: 'Cadastro',
      detail: `Estado ${this.estado.nome} cadastrado com sucesso!`
    });

    form.reset();
  }

  get editando(){
    return Boolean(this.estado.id);
  }
}
