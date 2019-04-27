import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {
  categoriasUrl = 'http://localhost:8080/categorias';

  constructor(private service: HttpClient) { }

  pesquisar() {
    return this.service.get<any>(this.categoriasUrl).toPromise();
  }

  excluir(id: number) :Promise<void> {
    return this.service.delete<any>(`${this.categoriasUrl}/${id}`).toPromise();
  }
}
