import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { IntencionPago } from '../models/intencion-pago.model'; 
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PagoService {
  private apiUrl = 'http://localhost:5017/intencionpago';

  constructor(private http: HttpClient) { }

  crearIntencionPago(intencion: IntencionPago): Observable<IntencionPago> {
    return this.http.post<IntencionPago>(this.apiUrl, intencion).pipe(
        catchError((error) => {
            return throwError(() => new Error(error.error || 'Error al crear la intención de pago'));
        })
    );
}

  obtenerIntencionesPago(): Observable<IntencionPago[]> {
    return this.http.get<IntencionPago[]>(this.apiUrl);
  }

  private handleError(error: any) {
    console.error('Ocurrió un error:', error);
    return throwError(() => new Error('Error en la solicitud al servidor'));
  }
}
