import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() title: string = '';
  @Input() content: string = 'Primeiro Card';

  onActionClick() {
    // Lógica ao clicar no botão de ação
    console.log('Ação clicada!');

  }

}
