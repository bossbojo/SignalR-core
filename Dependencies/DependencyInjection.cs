using WebApi.Repositories.Implements;
using WebApi.Repositories.Interfaces;
using Microsoft.Extensions.DependencyInjection;

namespace WebApi.Dependencies
{
    public static class DependencyInjection
    {
        public static void DependencyInjectionServices(IServiceCollection services){
            services.AddScoped<IUsers,EFUsers>();
        }
    }
}