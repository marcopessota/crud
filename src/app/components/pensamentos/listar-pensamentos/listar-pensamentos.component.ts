import { Component, OnInit } from '@angular/core';
import { PensamentoModel } from 'src/app/models/PensamentoModel';
import { PensamentoService } from 'src/app/services/pensamento.service';

@Component({
  selector: 'app-listar-pensamentos',
  templateUrl: './listar-pensamentos.component.html',
  styleUrls: ['./listar-pensamentos.component.scss'],
})
export class ListarPensamentosComponent implements OnInit {
  listaPensamentos: PensamentoModel[] = [];
  constructor(public pensamentoService: PensamentoService) {}

  async ngOnInit(): Promise<void> {
    await this.fetchPensamentos();
  }

  async fetchPensamentos() {
    this.listaPensamentos = await this.pensamentoService.fetchPensamentos();
  }
}
