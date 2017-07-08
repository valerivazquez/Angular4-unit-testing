// objetos con utilidades comunes del framework
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';
// importación del componente raíz, definido en esta misma carpeta
import { AppComponent } from './app.component';
// importación de un módulo de funcionalidad
import { MovimientosModule } from './movimientos/movimientos.module'
import { MovimientosComponent } from './movimientos/movimientos.component'
import { ContactoModule } from './contacto/contacto.module';
import { ContactoComponent } from './contacto/contacto.component';
import { HomeComponent } from './home/home.component';
import { SaludoComponent } from './saludo/saludo.component';
import { CalendarioModule} from './calendario/calendario.module';
import { FestivosComponent } from './calendario/festivos/festivos.component'
import { HttpToolsService } from './shared/http-tools.service';
import { SeguridadComponent } from './seguridad/seguridad.component';
import { SeguridadService } from './seguridad/seguridad.service';
// material design
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


// definir las rutas
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'inicio', redirectTo: '' },
  { path: 'contacto', component: ContactoComponent },
  { path: 'movimientos', component: MovimientosComponent },
  { path: 'movimientos/:id', component: MovimientosComponent },
  { path: 'seguridad', component: SeguridadComponent },
  { path: 'saludo', component: SaludoComponent },
  { path: 'saludo/:amigo', component: SaludoComponent },
  { path: 'festivos/:id', component: FestivosComponent },
  { path: 'festivos', component: FestivosComponent },
  
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];

// decorador que define un módulo
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SaludoComponent,
    SeguridadComponent
  ], // cosas declaradas en este módulo
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MovimientosModule, // el módulo de movimientos,
    CalendarioModule,
    ContactoModule,
    RouterModule.forRoot(routes),
    MaterialModule ,// Valeri: eliminado forRoot()
    BrowserAnimationsModule // Valeri: añadido 
  ], // otros módulos que necesitamos para que este funcione
  providers: [
    HttpToolsService,
    SeguridadService
  ],  // inyección de servicios comunes para la aplicación
  bootstrap: [AppComponent] // componente raíz para el arranque
})
// los módulos son clases contendoras 
// habitualmente con poco o ningún código
export class AppModule { }
