import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Festivo } from './../festivos/festivos.model';

@Component({
  selector: 'app-festivo-nuevo',
  templateUrl: './festivo-nuevo.component.html',
  styleUrls: ['./festivo-nuevo.component.css']
})
export class FestivoNuevoComponent implements OnInit {
  /** propiedad para entrada de un movimiento */
  @Input() festivo: Festivo;
  
  // emite eventos de cambio y de guardado
  /** propiedad para emitir el evento de guardado del festivo */
  @Output() guardar: EventEmitter<Festivo> = new EventEmitter<Festivo>();

  tipoAccion: string;

  constructor() { }

  ngOnInit() { 
    if (this.festivo._id == null){
      this.tipoAccion = "Nuevo Año-Festivos" 
    }else{
      this.tipoAccion = "Modificar Año-Festivos"
    }



   }


/** cuando el usuario hace click en el botón de guardado */
  guardarFestivo() {
    this.guardar.emit(this.festivo);
  }




}
