import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntencionPagoFrmComponent } from './intencion-pago-frm/intencion-pago-frm.component';
import { InicioFrmComponent } from './inicio-frm/inicio-frm.component';
import { ConsultaFrmComponent } from './consulta-frm/consulta-frm.component';

const routes: Routes = [
  { path: 'inicio', component: InicioFrmComponent },
  { path: 'intencion-pago', component: IntencionPagoFrmComponent }, // Ruta para el formulario de Intención de Pago
  { path: 'consulta', component: ConsultaFrmComponent },
  { path: '', redirectTo: '/inicio', pathMatch: 'full' }, // Redirigir a inicio por defecto
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
