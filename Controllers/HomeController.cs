using System;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using NSwag.Annotations;

namespace AppApi.Controllers
{
    public class HomeController : Controller
    {
        // is index page
        //[SwaggerIgnore]
        public IActionResult Index()
        {
            
              return View();
        }
    }
}