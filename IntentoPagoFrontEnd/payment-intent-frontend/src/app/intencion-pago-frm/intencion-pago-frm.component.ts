import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IntencionPago } from '../models/intencion-pago.model';
import { PagoService } from '../servicios/pago.service';

@Component({
  selector: 'app-intencion-pago-frm',
  templateUrl: './intencion-pago-frm.component.html',
  styleUrls: ['./intencion-pago-frm.component.css']
})
export class IntencionPagoFrmComponent {
  intencionPagoForm: FormGroup;
  mensajeExito: string = ''; 

  onlyNumbers(event: Event) {
    const input = event.target as HTMLInputElement;
    input.value = input.value.replace(/[^0-9]/g, ''); // Solo permitir números
  }

  constructor(private formBuilder: FormBuilder, private IntencionPagoServicio: PagoService) {
    this.intencionPagoForm = this.formBuilder.group({
      NombreCompleto: ['', Validators.required],
      TipoIdentificacion: ['', Validators.required],
      NumeroIdentificacion: ['', Validators.required],
      TelefonoContacto: ['', Validators.required],
      CorreoElectronico: ['', [Validators.required, Validators.email]],
      MontoDeuda: ['', [Validators.required, Validators.min(0.01)]],
      MontoPropuesto: ['', [Validators.required, Validators.min(0.01)]],
      NumeroCuotasPropuestas: [1, [Validators.required, Validators.min(1), Validators.max(84)]],
      ComentariosAdicionales: ['']
    });
  }
  
  onSubmit() {
    if (this.intencionPagoForm.valid) {
      const nuevaIntencion: IntencionPago = this.intencionPagoForm.value;

      this.IntencionPagoServicio.crearIntencionPago(nuevaIntencion).subscribe({
        next: (respuesta) => {
          console.log('Intención de pago creada:', respuesta);
          this.mensajeExito = '¡La intención de pago se creó exitosamente!';
          this.intencionPagoForm.reset();
        },
        error: (error) => {
          console.error('Error al crear la intención de pago:', error);
          this.mensajeExito = 'Ocurrió un error al crear la intención de pago. Inténtelo nuevamente.';
        }
      });

    }else {
      console.log('El formulario no es válido, por favor verifique los errores');
    }
  }  
}
