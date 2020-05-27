import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrarSnippetComponent } from './registrar-snippet/registrar-snippet.component';
import { ManejoAdminComponent } from './manejo-admin/manejo-admin.component';
import { PaginaInicioComponent } from './pagina-inicio/pagina-inicio.component';
import { RegistarSerieComponent } from './registar-serie/registar-serie.component';
import { RegistarTemporadaComponent } from './registar-temporada/registar-temporada.component';
import { RegistarCapituloComponent } from './registar-capitulo/registar-capitulo.component';
import { ListarArticuloComponent} from './listar-articulo/listar-articulo.component'
import { ListarSnippetsComponent} from './listar-snippets/listar-snippets.component'
<<<<<<< HEAD
<<<<<<< HEAD
import { NosotrosComponent} from './nosotros/nosotros.component'
import { MilistaComponent} from './milista/milista.component'
=======
>>>>>>> 318ca9edeed04579031bdc74ba86e5c5e52af8e2
=======
>>>>>>> f0c27e6edb0f45b96a5647c8e2ced1e52d592770

const routes: Routes = [
  {path: '', component: PaginaInicioComponent},
  //rutas de los rest 
  //{path: 'registar/loque sea', component: componentPertinente}
  {path: 'regSnippet', component: RegistrarSnippetComponent},
  {path: 'manejoAdmin', component: ManejoAdminComponent},
  {path: 'regSerie', component: RegistarSerieComponent},
  {path: 'regTemporada', component: RegistarTemporadaComponent},
  {path: 'regCapitulo', component: RegistarCapituloComponent},
  {path: 'listArticulo', component: ListarArticuloComponent},
<<<<<<< HEAD
<<<<<<< HEAD
  {path: 'listSnippets', component: ListarSnippetsComponent},
  {path: 'nosotros', component: NosotrosComponent},
  {path: 'milista', component: MilistaComponent}
=======
  {path: 'listSnippets', component: ListarSnippetsComponent}
>>>>>>> 318ca9edeed04579031bdc74ba86e5c5e52af8e2
=======
  {path: 'listSnippets', component: ListarSnippetsComponent}
>>>>>>> f0c27e6edb0f45b96a5647c8e2ced1e52d592770



  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
