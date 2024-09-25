export interface IntencionPago {
    nombreCompleto: string;
    tipoIdentificacion: number;
    numeroIdentificacion: string;
    telefonoContacto: string;
    correoElectronico: string;
    montoDeuda: number;
    montoPropuesto: number;
    numeroCuotasPropuestas: number;
    comentariosAdicionales?: string;
}