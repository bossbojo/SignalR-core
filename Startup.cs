using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.FileProviders;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using WebApi.Configs;
using WebApi.Services;
using WebApi.Dependencies;
using Microsoft.AspNetCore.Http;

namespace WebApi
{
    public class Startup
    {
        public Startup(IHostingEnvironment env)
        {
            var builder = new ConfigurationBuilder()
               .SetBasePath(env.ContentRootPath)
               .AddJsonFile("appsettings.json", optional: false, reloadOnChange: true)
               .AddJsonFile($"appsettings.{env.EnvironmentName}.json", optional: true)
               .AddEnvironmentVariables();
            Configuration = builder.Build();

            //Setting project
            StaticVariables.ProjectName = "SignalR Microservice";

            StaticVariables.Version = "0.1";

            StaticVariables.ENV = env.EnvironmentName;

            StaticVariables.ConnectionString = Configuration.GetConnectionString("ConnectionDB");

        }
        public IConfiguration Configuration { get; }

        public void ConfigureServices(IServiceCollection services)
        {
            services.AddDirectoryBrowser();

            services.AddSignalR();

            services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_1);

            AuthenticationConfig.AuthenticationConfigServices(services, Configuration);

            CORS.CORSServices(services);

            DependencyInjection.DependencyInjectionServices(services);

            Swagger.StartUpSwaggerConfigureServices(services);

        }
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment()) //Is Development mode
            {
                Swagger.StartUpSwaggerConfigure(app);
                app.UseDeveloperExceptionPage();
            }
            else if (env.IsProduction()) //Is Production mode
            {
                app.UseHsts();
            }
            else if (env.IsStaging()) //Is Staging mode
            {
                app.UseHsts();
            }


            DefaultFiles.DefaultFilesConfigure(app, env);
            SignalRMapHub.SignalRMapHubConfigure(app);

            app.UseAuthentication();
            app.UseCors("CorsPolicy");
            app.UseHttpsRedirection();
            app.UseMvc();
        }
    }
}
