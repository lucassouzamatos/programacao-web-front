import { Cidade } from './model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CidadesService {
  cidadesURL = 'https://pweb-lucas.herokuapp.com/cidades';

  constructor(
    private http: HttpClient
  ) { }

  pesquisar(): Promise<any> {
    return this.http.get<any>(this.cidadesURL).toPromise();
  }

  listarUf(): Promise<any> {
    return this.http.get<any>('https://pweb-lucas.herokuapp.com/estados').toPromise();
  }

  excluir(id:number):Promise<void>{
    return this.http.delete(this.cidadesURL+'/'+id)
    .toPromise()
    .then(() => null);
  }

  adicionar(cidade: Cidade): Promise<any>{
    return this.http.post(this.cidadesURL, cidade)
    .toPromise();
  }

  alterar(cidade: Cidade): Promise<any>{
    return this.http.put(this.cidadesURL+'/'+cidade.id, cidade)
    .toPromise();
  }

  buscarPorCodigo(codigo: number): Promise<Cidade> {
    return this.http.get<Cidade>(this.cidadesURL+'/'+codigo).toPromise();
  }
}
