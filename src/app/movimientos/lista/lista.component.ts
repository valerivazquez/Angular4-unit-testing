import { Movimiento, MaestroModel  } from './../datos.model';
// Ya no requiere observables y librerías de datos
// import { Observable } from 'rxjs/Observable';
// import { DatosService } from './../datos.service';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  // Recibe los datos vía propiedad desde su contenedor
  /** Arrya de movimientos que debe pintar */


  @Input('movimientos') movimientos: Movimiento[];  
  @Input('proyectos') proyectos: MaestroModel[] = [];


  /** propiedad para emitir el evento de borrar festivo */
  @Output() borrar: EventEmitter<Movimiento> = new EventEmitter<Movimiento>();
  // Sin dependencias  
  constructor() { }

  ngOnInit() {
console.log('Lista-movimientos', this.movimientos)
console.log('Lista-proyectos', this.proyectos)

  }

  /** cuando el usuario hace click en el botón de guardado */
  borrarMovimiento(movimiento: Movimiento) {
    this.borrar.emit(movimiento); 
  }



}
