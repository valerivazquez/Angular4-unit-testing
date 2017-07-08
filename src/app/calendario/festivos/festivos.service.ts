import { FestivoModel, Festivo } from './festivos.model';
import { Injectable } from '@angular/core';
// Importar objetos de la librería http
import { Http } from '@angular/http';
// importación de operadores de las reactive extensions
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch'
import { HttpToolsService } from './../../shared/http-tools.service'

/**
 * Programación reactiva con observables
 */

// permite la suscripción a cambios de un stream
import { Observable } from 'rxjs/Observable';
// se comporta como un obseervable y además permite la emisión de datos hacia un observable
import { Subject } from 'rxjs/Subject';


// decoración para marcarlo como inyectable
@Injectable()
export class FestivosService {

  private urlBase: string = 'http://localhost:3030/api'
 // private categorias: MaestroTipoModel[] = [];
  

  // Reclamar la dependencia sobre http  
  // Se ha registrado en el módulo raíz, se supone uso común a varios servicios
  constructor(private http: Http, private httpToolsService: HttpToolsService) {
  }


  getNuevoFestivo(): FestivoModel {
    return new Festivo(
      0,
      ["","","","","","","","","","","","","","",""]
   //    [new Date(Date.now()),new Date(Date.now()),new Date(Date.now()),new Date(Date.now()),
   //    new Date(Date.now()),new Date(Date.now()),new Date(Date.now()),new Date(Date.now()),new Date(Date.now()),
   //    new Date(Date.now()),new Date(Date.now()),new Date(Date.now()),new Date(Date.now()),new Date(Date.now())]
    );
  }


  getFestivosPorYear( year): any {  // poner FestivoModel!!!!!!
    //return this.categorias.filter(c => c.type === tipo);
  }

  getFestivoPor_Id$(_id) : Observable<FestivoModel>{
    let options = this.httpToolsService.configurarCabeceras()
    return this.http
      .get(`${this.urlBase}/priv/festivos/${_id}`,options)
      .map(this.httpToolsService.obtenerDatos)
      .catch(this.httpToolsService.tratarErrores)
  }

  deleteFestivoPor_Id$(_id) : Observable<FestivoModel>{
    let options = this.httpToolsService.configurarCabeceras()
    return this.http
      .delete(`${this.urlBase}/priv/festivos/${_id}`,options)
      .map(this.httpToolsService.obtenerDatos)
      .catch(this.httpToolsService.tratarErrores)
  }

  postFestivo(festivo: Festivo) {
    /**
     * primero preparación de datos para su envío
     * después suscripción y operaciones sobre la respuesta
     */
    let body = JSON.stringify(festivo)
    let options = this.httpToolsService.configurarCabeceras()
    if (festivo._id && festivo._id !=='_') {
      return this.http
        .put(`${this.urlBase}/priv/festivos/${festivo._id}`, body, options)
        .catch(this.httpToolsService.tratarErrores)
    }
    else {
      return this.http
        .post(`${this.urlBase}/priv/festivos`, body, options)
        .catch(this.httpToolsService.tratarErrores)
    }
  }

  getFestivos$(): Observable<FestivoModel[]> {
    let options = this.httpToolsService.configurarCabeceras()
    return this.http
      .get(`${this.urlBase}/priv/festivos`,options)
      .map(this.httpToolsService.obtenerDatos)
      .catch(this.httpToolsService.tratarErrores)
  }  

  

  
}
