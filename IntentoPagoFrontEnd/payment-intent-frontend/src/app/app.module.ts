import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IntencionPagoFrmComponent } from './intencion-pago-frm/intencion-pago-frm.component';
import { InicioFrmComponent } from './inicio-frm/inicio-frm.component';
import { ConsultaFrmComponent } from './consulta-frm/consulta-frm.component';


@NgModule({
  declarations: [
    AppComponent,
    IntencionPagoFrmComponent,
    InicioFrmComponent,
    ConsultaFrmComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
