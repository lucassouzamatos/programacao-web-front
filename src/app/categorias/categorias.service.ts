import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Categoria } from './model';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {
  categoriasUrl = 'https://pweb-lucas.herokuapp.com/categorias';

  constructor(private service: HttpClient) { }

  pesquisar(filtro?: any) {
    if (filtro) {
      return this.service.get<any>(this.categoriasUrl + "/busca?nome=" + filtro).toPromise();
    }

    return this.service.get<any>(this.categoriasUrl).toPromise();
  }

  excluir(id: number): Promise<void> {
    return this.service.delete<any>(`${this.categoriasUrl}/${id}`).toPromise();
  }

  adicionar(cat: Categoria) :Promise<any> {
    return this.service.post(this.categoriasUrl, cat).toPromise();
  }

  alterar(categoria: Categoria): Promise<any>{
    return this.service.put(this.categoriasUrl + '/' + categoria.id, categoria)
    .toPromise();
  }

  buscarPorCodigo(codigo: number): Promise<Categoria> {
    return this.service.get<Categoria>(this.categoriasUrl + '/' + codigo).toPromise();
  }
}
