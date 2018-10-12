using System.Collections.Generic;
using WebApi.Services;
using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;
using Swashbuckle.AspNetCore.Swagger;

namespace WebApi.Configs
{
    public static class Swagger
    {
        public static void StartUpSwaggerConfigureServices(IServiceCollection services)
        {
            services.AddSwaggerGen(c =>
            {
                // var xmlPath = System.AppDomain.CurrentDomain.BaseDirectory + "WebApi.XML";
                // c.IncludeXmlComments(xmlPath);
                c.SwaggerDoc("v1", new Info { Title = StaticVariables.ProjectName + " API", Version = "version " + StaticVariables.Version });
            });
        }
        public static void StartUpSwaggerConfigure(IApplicationBuilder app)
        {
            app.UseSwagger();
            app.UseSwaggerUI(c =>
            {
                c.SwaggerEndpoint("/swagger/v1/swagger.json", StaticVariables.ProjectName + " API version " + StaticVariables.Version);
                c.DocumentTitle = "SignalR Microservice API";
                c.DocExpansion(DocExpansion.None);
            });
        }
    }
}