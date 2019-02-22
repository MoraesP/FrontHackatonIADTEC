import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { PaisComponent } from './pais/pais.component';
import { PaisModule } from './pais/pais.module';
import { HttpClientModule } from '@angular/common/http';
import { EstadoComponent } from './estado/estado.component';
import { ClienteModule } from './cliente/clientes.module';

@NgModule({
  declarations: [AppComponent, HomeComponent, EstadoComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ClienteModule,
    PaisModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
