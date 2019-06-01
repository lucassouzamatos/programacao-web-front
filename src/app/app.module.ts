import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastModule } from 'primeng/toast';

import { NgModule } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ConfirmationService } from 'primeng/api';
import {SidebarModule} from 'primeng/sidebar';
import {Routes, RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { CategoriasModule } from './categorias/categorias.module';
import { HttpClientModule } from '@angular/common/http';
import { CategoriasPesquisaComponent } from './categorias/categorias-pesquisa/categorias-pesquisa.component';
import { CategoriasCadastroComponent } from './categorias/categorias-cadastro/categorias-cadastro.component';
import { EstadosPesquisaComponent } from './estados/estados-pesquisa/estados-pesquisa.component';
import { EstadosCadastroComponent } from './estados/estados-cadastro/estados-cadastro.component';
import { EstadosModule } from './estados/estados.module';
import { CidadesModule } from './cidades/cidades.module';
import { CidadesCadastroComponent } from './cidades/cidades-cadastro/cidades-cadastro.component';
import { ButtonModule } from 'primeng/button';
import { ProdutosModule } from './produtos/produtos.module';
import { ProdutosCadastroComponent } from './produtos/produtos-cadastro/produtos-cadastro.component';

const rotas: Routes = [
  { path: '', redirectTo:'categorias', pathMatch:'full' },
  { path: 'cidades', component: CidadesCadastroComponent },
  { path: 'categorias', component: CategoriasPesquisaComponent },
  { path: 'categorias/novo', component: CategoriasCadastroComponent },
  { path: 'categorias/:id', component: CategoriasCadastroComponent },
  { path: 'estados', component: EstadosPesquisaComponent },
  { path: 'estados/novo', component: EstadosCadastroComponent },
  { path: 'produtos', component:ProdutosCadastroComponent },
  { path: 'estados/:id', component: EstadosCadastroComponent },
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CategoriasModule,
    CidadesModule,
    EstadosModule,
    HttpClientModule,
    SidebarModule,
    ButtonModule,
    ProdutosModule,
    ToastModule,
    RouterModule.forRoot(rotas)
  ],
  providers: [
    MessageService,
    ConfirmationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
