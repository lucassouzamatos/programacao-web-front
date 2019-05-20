import { Component, OnInit } from '@angular/core';
import { EstadosService } from '../estados.service';
import { MessageService, ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-estados-pesquisa',
  templateUrl: './estados-pesquisa.component.html',
  styleUrls: ['./estados-pesquisa.component.css']
})
export class EstadosPesquisaComponent implements OnInit {
  estados = [];
  filtro:string;

  constructor(
    private estadosService: EstadosService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
  ) { }

  ngOnInit() {
    this.pesquisar();
  }

  pesquisar() {
    this.estadosService.pesquisar(this.filtro).then(data => this.estados = data)
  }

  excluir(estado: any) {
    this.confirmationService.confirm({
      message: 'Tem certeza que deseja excluir esse registro?',
      accept: () => {
        this.estadosService.excluir(estado.id).then(() => {
          this.pesquisar();
          this.messageService.add({ severity:'success', summary:'Estado excluído', detail: 'Estado excluído com sucesso' })
        });
      }
    });
  }

}
