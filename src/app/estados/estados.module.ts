import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextModule } from "primeng/inputtext";
import { ButtonModule } from "primeng/button";
import { TableModule } from "primeng/table";
import { TooltipModule } from 'primeng/tooltip';
import { BrowserModule } from '@angular/platform-browser';

import { EstadosCadastroComponent } from './estados-cadastro/estados-cadastro.component';
import { EstadosPesquisaComponent } from './estados-pesquisa/estados-pesquisa.component';
import { EstadosService } from './estados.service';
import { ToastModule } from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [EstadosCadastroComponent, EstadosPesquisaComponent],
  imports: [
    CommonModule,
    BrowserModule,
    InputTextModule,
    ButtonModule,
    TableModule,
    TooltipModule,
    ToastModule,
    ConfirmDialogModule,
    FormsModule,
    RouterModule
  ],
  providers: [
    EstadosService
  ]
})
export class EstadosModule { }
