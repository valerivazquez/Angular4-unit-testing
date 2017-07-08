import { ActivatedRoute} from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Festivo } from './festivos.model';
import { FestivosService } from './festivos.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-festivos',
  templateUrl: './festivos.component.html',
  styleUrls: ['./festivos.component.css']
})
export class FestivosComponent implements OnInit {

  festivo: Festivo;
  festivos: Festivo[];
  festivos$: Observable<Festivo[]>;
  festivo$: Observable<Festivo>;

  constructor(private festivosService: FestivosService,
              private activatedRoute: ActivatedRoute
              ) { }

  ngOnInit() {
    // por default lo considero nuevo
    this.festivo = this.festivosService.getNuevoFestivo();

    // Verifico si viene una ruta con parametros ==> Update del Festivo
    let parametros$: Observable<any> = this.activatedRoute.params;
    parametros$.subscribe(parametros => {
      this.festivo._id = parametros['id'];
      console.log("parametros", this.festivo)
      if (this.festivo._id){
        this.leerFestivo();
      }
  
    });
    
    this.refrescarFestivos();

  }

  refrescarFestivos(){
    this.festivos$ = this.festivosService.getFestivos$();
    this.festivos$.subscribe(festivos => this.festivos = festivos);
  }

  leerFestivo(){
    this.festivo$ = this.festivosService.getFestivoPor_Id$(this.festivo._id)
    this.festivo$.subscribe(festivo => this.festivo = festivo[0]);
  }

  /** Cuando se quiere guardar un festivo */
  guardarFestivo() {
    this.festivosService.postFestivo(this.festivo)
      .subscribe(result=>this.refrescarFestivos());
  }

  /** Cuando se quiere eliminar un festivo */
  borrarFestivo(festivo) {
    this.festivo$ = this.festivosService.deleteFestivoPor_Id$(festivo._id)
    this.festivo$.subscribe(result=>this.refrescarFestivos());
  }
}