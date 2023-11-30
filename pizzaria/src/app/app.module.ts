import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ModulosModule } from './modulos/modulos.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './Pages/home/home.component';
import { ToolbarComponent } from './Pages/Parte inicial e final/toolbar/toolbar.component';
import { FooterComponent } from './Pages/Parte inicial e final/footer/footer.component';
import { SobreComponent } from './Pages/about/sobre.component';
import { PedidosComponent } from './Pages/pedidos/pedidos.component';
import { GerenciaComponent } from './Pages/manager/gerencia.component';
import { StatusComponent } from './Pages/Status/status.component';
import { LoginComponent } from './components/login/login.component';
import { FazendoPedidosComponent } from './components/fazendo-pedidos/fazendo-pedidos.component';
import {ReactiveFormsModule} from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import { pedidosService } from './services/pedidos.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ToolbarComponent,
    
    FooterComponent,
    SobreComponent,
    PedidosComponent,
    GerenciaComponent,
    StatusComponent,
    LoginComponent,
    FazendoPedidosComponent,
    
   
  ],
  imports: [
    BrowserModule,
    ModulosModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [pedidosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
