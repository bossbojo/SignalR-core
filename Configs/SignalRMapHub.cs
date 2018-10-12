using WebApi.Hubs;
using Microsoft.AspNetCore.Builder;

namespace WebApi.Configs
{
    public static class SignalRMapHub
    {
        public static void SignalRMapHubConfigure(IApplicationBuilder app){

            app.UseSignalR(routes =>{ routes.MapHub<NotificationHub>("/notification"); });
            
        }
    }
}