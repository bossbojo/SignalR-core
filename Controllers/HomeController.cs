using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using NSwag.Annotations;
using WebApi.Services;

namespace NetCoreMVC.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            ViewData["ENV"] = StaticVariables.ENV;
            ViewData["ProjectName"] = StaticVariables.ProjectName;
            ViewData["Version"] = StaticVariables.Version;
            return View();
        }
        [SwaggerIgnore]
        public IActionResult Swagger()
        {
            return  new RedirectResult("~/swagger");
        }
    }
}
