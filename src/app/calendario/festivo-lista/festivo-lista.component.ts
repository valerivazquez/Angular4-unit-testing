import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Festivo} from './../festivos/festivos.model'
@Component({
  selector: 'app-festivo-lista',
  templateUrl: './festivo-lista.component.html',
  styleUrls: ['./festivo-lista.component.css']
})
export class FestivoListaComponent implements OnInit {

  // Recibe los datos vía propiedad desde su contenedor
  /** Arrya de movimientos que debe pintar */
  festivo: Festivo;

  @Input() festivos: Festivo[];  

/** propiedad para emitir el evento de borrar festivo */
  @Output() borrar: EventEmitter<Festivo> = new EventEmitter<Festivo>();
  constructor() { }

  ngOnInit() {
  }

/** cuando el usuario hace click en el botón de guardado */
  borrarFestivo(festivo: Festivo) {
    this.borrar.emit(festivo); 
  }

}

