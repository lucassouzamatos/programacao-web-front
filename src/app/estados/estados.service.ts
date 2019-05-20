import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Estado } from './model';

@Injectable({
  providedIn: 'root'
})
export class EstadosService {
  estadosUrl = 'http://localhost:8080/estados';

  constructor(private service: HttpClient) { }

  pesquisar(filtro?: any) {
    if (filtro) {
      return this.service.get<any>(this.estadosUrl + "/busca?nome=" + filtro).toPromise();
    }

    return this.service.get<any>(this.estadosUrl).toPromise();
  }

  excluir(id: number): Promise<void> {
    return this.service.delete<any>(`${this.estadosUrl}/${id}`).toPromise();
  }

  adicionar(cat: Estado) :Promise<any> {
    return this.service.post(this.estadosUrl, cat).toPromise();
  }

  alterar(estado: Estado): Promise<any> {
    return this.service.put(this.estadosUrl + '/' + estado.id, estado)
    .toPromise();
  }

  buscarPorCodigo(codigo: number): Promise<Estado> {
    return this.service.get<Estado>(this.estadosUrl + '/' + codigo).toPromise();
  }
}
