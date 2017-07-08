import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
//import { Movimiento, Maestro } from './datos.model';
import { MaestroModel, MaestroTipoModel, Movimiento } from './datos.model';
import { DatosService } from './datos.service';
import { Observable } from 'rxjs/Observable';

// Será un componente inteligente (statefull), con acceso a datos
@Component({
  selector: 'app-movimientos', // ojo al prefijo, por defecto app
  templateUrl: './movimientos.component.html',
  styleUrls: ['./movimientos.component.css']
})
export class MovimientosComponent implements OnInit {
  // Todos los datos necesarios se gestionana en el componente 
  tipos: MaestroModel[] = [];
  categorias: MaestroTipoModel[] = [];
  proyectos: MaestroModel[] = [];

  movimiento: Movimiento;
  movimientos: Movimiento[];
  movimientos$: Observable<Movimiento[]>;
  movimiento$: Observable<Movimiento>;

  // las dependencias se declaran como parámetros del constructor
  /** Depende del servicio de datos */
  constructor(private datosService: DatosService,
              private activatedRoute: ActivatedRoute) { }

  /** Al arrancar, obtiene datos estáticos y suscripciones a otros vivos */
  ngOnInit() {
    // por default lo considero nuevo
    this.movimiento = this.datosService.getNuevoMovimiento();
    
    // Verifico si viene una ruta con parametros ==> Update del movimiento
    let parametros$: Observable<any> = this.activatedRoute.params;
    parametros$.subscribe(parametros => {
      this.movimiento._id = parametros['id'];
      if (this.movimiento._id){
       this.leerMovimiento();
      }
    });
    
    
    
    
    
    
    
    this.refrescarMovimientos();
    let tipos$ : Observable<any> = this.datosService.getTipos();
    let proyectos$ : Observable<any> = this.datosService.getProyectos();
    tipos$.subscribe(tipos => {
      this.tipos = tipos;
      this.datosService.getCategorias().subscribe(categorias => {
        this.categorias = this.datosService.getCategoriasPorTipo(this.movimiento.tipo);
      });
    });
    proyectos$.subscribe(proyectos => {
      this.proyectos = proyectos;
    });
  }

  refrescarMovimientos(){
    this.movimientos$ = this.datosService.getMovimientos$();
    this.movimientos$.subscribe(movimientos => this.movimientos = movimientos);
  }

  leerMovimiento(){
    this.movimiento$ = this.datosService.getMovimientoPor_Id$(this.movimiento._id)
    this.movimiento$.subscribe(festivo => this.movimiento = festivo[0]);
  }






  /** Cuando ocurre un cambio en el tipo de movimiento */
  cambiarTipoDelMovimiento() {
    this.categorias = this.datosService.getCategoriasPorTipo(this.movimiento.tipo);
    // Cambios en el tipo, crean cambios en la categoría
    this.movimiento.categoria = this.datosService.getCategoriaBase(this.movimiento.tipo);
  }
  /** Cuando se quiere guardar un movimiento */
  guardarMovimiento() {
    this.datosService.postMovimiento(this.movimiento)
      .subscribe(result=>this.refrescarMovimientos());
  }


/** Cuando se quiere eliminar un festivo */
  borrarMovimiento(movimiento) {
    console.log("1.movimiento", movimiento)
    this.movimiento$ = this.datosService.deleteMovimientoPor_Id$(movimiento._id)
    this.movimiento$.subscribe(result=>this.refrescarMovimientos());
  }

}
