import { Component, OnInit } from '@angular/core';
import { PagoService } from '../servicios/pago.service';
import { IntencionPago } from '../models/intencion-pago.model';

@Component({
  selector: 'app-consulta-frm',
  templateUrl: './consulta-frm.component.html',
  styleUrls: ['./consulta-frm.component.css']
})
export class ConsultaFrmComponent implements OnInit {
  intencionPagos: IntencionPago[] = []; // Array para almacenar los datos

  constructor(private intencionPagoService: PagoService) {}

  ngOnInit(): void {
    this.loadIntencionPagos();
  }

  loadIntencionPagos(): void {
    this.intencionPagoService.obtenerIntencionesPago().subscribe(
      (data) => {
        console.log(data);
        this.intencionPagos = data; // Asigna los datos al array
      },
      (error) => {
        console.error('Error al obtener los datos:', error);
      }
    );
  }

  obtenerTipoIdentificacion(tipo: number): string {
    switch (tipo) {
        case 1:
            return 'Cédula';
        case 2:
            return 'Pasaporte';
        case 3:
            return 'RUC';
        default:
            return 'Desconocido';
    }
}
}