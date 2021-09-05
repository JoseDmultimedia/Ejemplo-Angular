import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() textCard: string;

  @Output() nuevoEvento = new EventEmitter<string>()

  constructor() {
    this.textCard="";
   }

  ngOnInit(): void {
  }

  cambiarTextoPadre(): void{
    this.nuevoEvento.emit("Este es el nuevo texto");
  }

}
