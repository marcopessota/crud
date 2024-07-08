import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PensamentoModel } from '../models/PensamentoModel';

@Injectable({
  providedIn: 'root',
})
export class PensamentoService {
  apiURL: string = 'http://localhost:3000/pensamentos';
  constructor(private http: HttpClient) {}

  async fetchPensamentos(): Promise<PensamentoModel[]> {
    return new Promise((resolve, reject) => {
      this.http.get<PensamentoModel[]>(this.apiURL).subscribe({
        next: (listaPensamentos) => {
          resolve(listaPensamentos);
        },
        error: (error) => {
          reject(error);
        },
      });
    });
  }

  async criarPensamento(pensamento: PensamentoModel): Promise<PensamentoModel> {
    return new Promise((resolve, reject) => {
      this.http.post<PensamentoModel>(this.apiURL, pensamento).subscribe({
        next: (pensamento) => {
          resolve(pensamento);
        },
        error: (error) => {
          reject(error);
        },
      });
    });
  }

  async apagarPensamento(id: number): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.http.delete<boolean>(`${this.apiURL}/${id}`).subscribe({
        next: (sucesso) => {
          console.log(sucesso);

          resolve(sucesso);
        },
        error: (error) => {
          reject(error);
        },
      });
    });
  }
}
