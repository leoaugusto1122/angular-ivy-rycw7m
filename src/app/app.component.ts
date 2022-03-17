import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  card: any = {
    titulo: 'Exemplo',
    descricao: 'Descricao exemplo de componente card',
    imagemUrl: 'https://picsum.photos/100/50',
  };

  contador = 0;

  error: boolean = false;

  constructor() {}

  getAlertColor() {
    return 'alert-danger';
  }

  onButtonClick() {
    this.contador++;
  }

  onClick(evento) {
    console.log(evento);
    this.card.titulo = 'Clicou!';
  }
}
