/** 
 * declaración de tipos para ayuda al programador
 * los datos suelen ser intanciados en el servidor
 * en esos casos basta declararlos como interfaces
 * */

export interface MaestroModel {
  id: number;
  text: string;
}
export interface MaestroTipoModel extends MaestroModel {
  type: number;
}

export interface MovimientoModel {
  _id?: any;
  fechaStart: Date;
  fechaEnd: Date;
  proyecto: number;
  importe: number;
  tipo: number;
  categoria: number;
  expedientesFinalizados: number;
  expedientesRevisados: number;
  expedientesIncidentados: number;

  notas: string;
}

export class Movimiento implements MovimientoModel {
  _id?: any;
  
  constructor(
    public fechaStart: Date,
    public fechaEnd: Date,
    public proyecto: number,
    public importe: number,
    public tipo: number,
    public categoria: number,
    public notas: string,
    public expedientesFinalizados: number,
    public expedientesRevisados: number,
    public expedientesIncidentados: number) {

    }

}
