import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextModule } from "primeng/inputtext";
import { ButtonModule } from "primeng/button";
import { TableModule } from "primeng/table";
import { TooltipModule } from 'primeng/tooltip';
import { BrowserModule } from '@angular/platform-browser';

import { CategoriasPesquisaComponent } from './categorias-pesquisa/categorias-pesquisa.component';
import { CategoriasService } from './categorias.service';
import { ToastModule } from 'primeng/toast';

@NgModule({
  declarations: [CategoriasPesquisaComponent],
  imports: [
    CommonModule,
    BrowserModule,
    InputTextModule,
    ButtonModule,
    TableModule,
    TooltipModule,
    ToastModule
  ],
  exports: [
    CategoriasPesquisaComponent
  ],
  providers: [
    CategoriasService
  ]
})
export class CategoriasModule { }
