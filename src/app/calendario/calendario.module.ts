import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FestivosService } from './festivos/festivos.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { FestivosComponent } from './festivos/festivos.component';
import { FestivoNuevoComponent } from './festivo-nuevo/festivo-nuevo.component';
import { FestivoListaComponent } from './festivo-lista/festivo-lista.component';

// material design
import { MaterialModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    MaterialModule],
  declarations: [FestivosComponent, FestivoNuevoComponent, FestivoListaComponent],
  exports:[FestivosComponent],
  providers: [
    FestivosService] // registro del servicio como un proveedor del módulo
  
})

export class CalendarioModule { }

