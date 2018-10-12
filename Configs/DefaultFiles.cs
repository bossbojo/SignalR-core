using System.Net;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Rewrite;

namespace WebApi.Configs
{
    public static class DefaultFiles
    {
        public static void DefaultFilesConfigure(IApplicationBuilder app, IHostingEnvironment env)
        {
            // DefaultFilesOptions options = new DefaultFilesOptions();
            // options.DefaultFileNames.Clear();
            // options.DefaultFileNames.Add("/Frontend/index.html");
            // app.UseDefaultFiles(options);
            app.UseHttpsRedirection();
            app.UseStaticFiles();
            app.UseCookiePolicy();

            app.UseMvc(routes =>
            {
                routes.MapRoute(
                    name: "default",
                    template: "{controller=Home}/{action=Index}/{id?}");
            });
        }
    }
}