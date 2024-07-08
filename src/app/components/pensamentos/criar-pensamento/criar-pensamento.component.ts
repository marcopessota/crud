import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PensamentoModel } from 'src/app/models/PensamentoModel';
import { PensamentoService } from 'src/app/services/pensamento.service';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.scss'],
})
export class CriarPensamentoComponent implements OnInit {
  pensamento: PensamentoModel = new PensamentoModel();

  constructor(
    private router: Router,
    private pensamentoService: PensamentoService
  ) {
    console.log(this.pensamento);
  }

  ngOnInit(): void {}

  async criarPensamento(pensamento: PensamentoModel) {
    const result: PensamentoModel =
      await this.pensamentoService.criarPensamento(pensamento);
    alert(`Pensamento ${result.id} criado com sucesso`);
    this.router.navigate(['/']);
  }
}
