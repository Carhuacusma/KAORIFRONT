import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrarSnippetComponent } from './registrar-snippet/registrar-snippet.component';
import { ListarSnippetsComponent } from './listar-snippets/listar-snippets.component';
//call rest 
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ManejoAdminComponent } from './manejo-admin/manejo-admin.component';
import { PaginaInicioComponent } from './pagina-inicio/pagina-inicio.component';
import { RegistarSerieComponent } from './registar-serie/registar-serie.component';
import { RegistarTemporadaComponent } from './registar-temporada/registar-temporada.component';
import { RegistarCapituloComponent } from './registar-capitulo/registar-capitulo.component';
import { MostrarArticuloComponent } from './mostrar-articulo/mostrar-articulo.component';
import { ListarArticuloComponent } from './listar-articulo/listar-articulo.component';
<<<<<<< HEAD
<<<<<<< HEAD
import { NosotrosComponent } from './nosotros/nosotros.component';
import { MilistaComponent } from './milista/milista.component';
=======
>>>>>>> 318ca9edeed04579031bdc74ba86e5c5e52af8e2
=======
>>>>>>> f0c27e6edb0f45b96a5647c8e2ced1e52d592770

@NgModule({
  declarations: [
    AppComponent,
    RegistrarSnippetComponent,
    ListarSnippetsComponent,
    ManejoAdminComponent,
    PaginaInicioComponent,
    RegistarSerieComponent,
    RegistarTemporadaComponent,
    RegistarCapituloComponent,
    MostrarArticuloComponent,
<<<<<<< HEAD
<<<<<<< HEAD
    ListarArticuloComponent,
    NosotrosComponent,
    MilistaComponent
=======
    ListarArticuloComponent
>>>>>>> 318ca9edeed04579031bdc74ba86e5c5e52af8e2
=======
    ListarArticuloComponent
>>>>>>> f0c27e6edb0f45b96a5647c8e2ced1e52d592770
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
