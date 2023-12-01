import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { SobreComponent } from './Pages/about/sobre.component';
import { PedidosComponent } from './Pages/pedidos/pedidos.component';
import { GerenciaComponent } from './Pages/manager/pagina-login-gerencia/gerencia.component';
import { StatusComponent } from './Pages/Status/status.component';
import { PanielComponent } from './Pages/manager/Paniel/paniel.component';



const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'Sobre', component: SobreComponent },
  { path: 'Pedidos', component: PedidosComponent },
  { path: 'Gerencia', component: GerenciaComponent },
  { path: 'Status', component: StatusComponent },
  { path: 'Paniel', component: PanielComponent},
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
