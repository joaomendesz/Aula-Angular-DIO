import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {
 text = 'João Pedro'
 imageUrl = 'https://picsum.photos/300/300'

  constructor() { }

  ngOnInit(): void {
  }
  meuTexto() {
    return this.text
  }
  clicou() {
    this.text = 'Você apertou o botão?'
    console.log('Você clicou!')
  }
}
