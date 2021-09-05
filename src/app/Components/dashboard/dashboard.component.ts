import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  nombre: string; 
  urlImg: string;
  texto: string;
  otroTexto: string;

  constructor() { 
    this.nombre = "jose";
    this.urlImg="https://w7.pngwing.com/pngs/104/341/png-transparent-pokemon-let-s-go-pikachu-ash-ketchum-pokemon-pikachu-pikachu-let-s-go-ash-ketchum-pokemon-pikachu.png";
    this.texto = "Este es un compoente hijo";
    this.otroTexto = "";
  }

  ngOnInit(): void {
  }

  getName(): string{
    return this.nombre="jose";
  }

  suma(num1: number, num2:number): number{
    return num1 + num2;
  }

  cambiarTexto(): void{
    this.nombre = "camila";
  }

  cambiarTextoOtro(nuevoTexto:string): void{
    this.otroTexto = nuevoTexto;
  }


}
