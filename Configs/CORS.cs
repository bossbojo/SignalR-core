using Microsoft.Extensions.DependencyInjection;

namespace WebApi.Configs
{
    public static class CORS
    {
        public static void CORSServices(IServiceCollection services){
            services.AddCors(o => o.AddPolicy("CorsPolicy", builder => { 
                builder
                .AllowAnyMethod()
                .AllowAnyHeader()
                .AllowCredentials()
                .AllowAnyOrigin()
                .WithOrigins(); 
            }));
        }
    }
}