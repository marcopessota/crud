import { Component, Input, OnInit, Output } from '@angular/core';
import { PensamentoModel } from 'src/app/models/PensamentoModel';
import { PensamentoService } from 'src/app/services/pensamento.service';

@Component({
  selector: 'app-pensamento',
  templateUrl: './pensamento.component.html',
  styleUrls: ['./pensamento.component.scss'],
})
export class PensamentoComponent implements OnInit {
  @Input() pensamento: PensamentoModel = new PensamentoModel();

  constructor(private pensamentoService: PensamentoService) {}

  ngOnInit(): void {}

  async clickDelete() {
    const resultConfirm = confirm('Deseja apagar pensamento?');
    if (!resultConfirm) return;
    await this.pensamentoService.apagarPensamento(this.pensamento.id);
    alert('Pensamento apagado com sucesso');
    location.reload();
  }
}
