/** 
 * declaración de tipos para ayuda al programador
 * los datos suelen ser intanciados en el servidor
 * en esos casos basta declararlos como interfaces
 * */

export interface FestivoModel {
  _id?: any;
  year: number; // year
  festivos: any [] ;
}

export class Festivo implements FestivoModel {
  _id?: any;
  
  constructor(
    public year: number,  // year
    public festivos: any[] ) {

    }

}
