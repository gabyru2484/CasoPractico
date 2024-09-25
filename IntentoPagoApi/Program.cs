using IntentoPagoApi.Models;
using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAngularClient",
        policy =>
        {
            policy.WithOrigins("http://localhost:4200")
                  .AllowAnyHeader()
                  .AllowAnyMethod();
        });
});


var app = builder.Build();

app.UseCors("AllowAngularClient");

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

// Lista estática para almacenar las intenciones de pago
List<IntencionPago> intencionesPago = new List<IntencionPago>();

// Endpoint para crear una nueva intención de pago (POST)
app.MapPost("/intencionpago", (IntencionPago intencion) =>
{
    intencionesPago.Add(intencion); // Agrega la intención a la lista
    return Results.Created($"/intencionpago/{intencion.NumeroIdentificacion}", intencion);
});

// Endpoint para obtener todas las intenciones de pago (GET)
app.MapGet("/intencionpago", () =>
{
    return Results.Ok(intencionesPago); // Devuelve la lista de intenciones
});

app.UseHttpsRedirection();

app.Run();

