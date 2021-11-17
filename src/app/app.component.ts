import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'bytebank';
  valor: number;
  destino: number;
  transferencia: any = {};

  transferir($event) {

    console.log($event);
    this.transferencia = $event;
  }

  limparCampos() {

    this.valor = 0;
    this.destino = 0;
  }
}
