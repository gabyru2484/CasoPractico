using System.ComponentModel.DataAnnotations;


namespace IntentoPagoApi.Models
{
    public class IntencionPago
    {
        [Required(ErrorMessage = "El nombre completo es obligatorio.")]
        public string NombreCompleto { get; set; }
        
        [Required(ErrorMessage = "El tipo de identificación es obligatorio.")]
        public int TipoIdentificacion { get; set; }

        [Required(ErrorMessage = "El número de identificación es obligatorio.")]
        public string NumeroIdentificacion { get; set; }

        [Required(ErrorMessage = "El teléfono de contacto es obligatorio.")]
        public string TelefonoContacto { get; set; }
        
        [Required(ErrorMessage = "El correo electrónico es obligatorio.")]
        [EmailAddress(ErrorMessage = "Correo electrónico inválido.")]
        public string CorreoElectronico { get; set; }
        
        [Required(ErrorMessage = "El monto de deuda es obligatorio.")]
        [Range(0.01, double.MaxValue, ErrorMessage = "El monto de deuda debe ser mayor que 0.")]
        public decimal MontoDeuda { get; set; }

        [Required(ErrorMessage = "El monto propuesto es obligatorio.")]
        [Range(0.01, double.MaxValue, ErrorMessage = "El monto propuesto debe ser mayor que 0.")]
        public decimal MontoPropuesto { get; set; }
        
        [Required(ErrorMessage = "El número de cuotas propuestas es obligatorio.")]
        [Range(1, int.MaxValue, ErrorMessage = "El número de cuotas propuestas debe ser mayor que 0.")]
        public int NumeroCuotasPropuestas { get; set; }
        public string? ComentariosAdicionales { get; set; }

        /// <summary>
        /// Constructor por defecto que inicializa los campos
        /// </summary>
        public IntencionPago()
        {
            NombreCompleto = string.Empty;
            TipoIdentificacion = 0; // Default value for integer
            NumeroIdentificacion = string.Empty;
            TelefonoContacto = string.Empty;
            CorreoElectronico = string.Empty;
            MontoDeuda = 0.0m; // Default value for decimal
            MontoPropuesto = 0.0m; // Default value for decimal
            NumeroCuotasPropuestas = 0; // Default value for integer
            ComentariosAdicionales = string.Empty;
        }

        
        /// <summary>
        /// Constructor que inicializa los campos con valores específicos
        /// </summary>
        /// <param name="nombreCompleto">Nombre del cliente</param>
        /// <param name="tipoIdentificacion">Tipo de Identificación del cliente, 1 cédula o 2 pasaporte</param>
        /// <param name="numeroIdentificacion">Número de Identificación del cliente</param>
        /// <param name="telefonoContacto">Teléfono del cliente</param>
        /// <param name="correoElectronico">Correo Electrónico del Cliente</param>
        /// <param name="montoDeuda">Monto de la deuda del cliente</param>
        /// <param name="montoPropuesto">Monto propuedto de pago del cliente</param>
        /// <param name="numeroCuotasPropuestas">Número de cuotas del convenio de pagos</param>
        /// <param name="comentariosAdicionales">Comentarios extras del cliente</param>
        public IntencionPago(string nombreCompleto, int tipoIdentificacion, string numeroIdentificacion,
                             string telefonoContacto, string correoElectronico, decimal montoDeuda,
                             decimal montoPropuesto, int numeroCuotasPropuestas, string? comentariosAdicionales)
        {
            NombreCompleto = nombreCompleto;
            TipoIdentificacion = tipoIdentificacion;
            NumeroIdentificacion = numeroIdentificacion;
            TelefonoContacto = telefonoContacto;
            CorreoElectronico = correoElectronico;
            MontoDeuda = montoDeuda;
            MontoPropuesto = montoPropuesto;
            NumeroCuotasPropuestas = numeroCuotasPropuestas;
            ComentariosAdicionales = comentariosAdicionales;
        }
    }    
}
