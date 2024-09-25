using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using IntentoPagoApi.Models; // Asegúrate de incluir el namespace

namespace IntentoPagoApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class IntencionPagoController : ControllerBase
    {
        private static List<IntencionPago> intencionesPago = new List<IntencionPago>();

        [HttpPost]
        public IActionResult CrearIntencionPago([FromBody] IntencionPago intencionPago)
        {
            // Convertir los campos a mayúsculas
            intencionPago.NombreCompleto = intencionPago.NombreCompleto.ToUpper();
            if (!string.IsNullOrEmpty(intencionPago.ComentariosAdicionales))
            {
                intencionPago.ComentariosAdicionales = intencionPago.ComentariosAdicionales.ToUpper();
            }

            // Validar si el número de identificación ya existe
            var existe = intencionesPago.Any(i => i.NumeroIdentificacion == intencionPago.NumeroIdentificacion);
            if (existe)
            {
                return Conflict("El Número de Identificación ya existe.");
            }

            // Si no existe, añadir la intención de pago
            intencionesPago.Add(intencionPago);
            return CreatedAtAction(nameof(ObtenerIntencionesPago), new { id = intencionesPago.Count - 1 }, intencionPago);
        }


        [HttpGet]
        public ActionResult<List<IntencionPago>> ObtenerIntencionesPago()
        {
            return Ok(intencionesPago);
        }
    }
}
