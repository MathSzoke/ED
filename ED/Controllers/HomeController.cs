using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Web;
using System.Web.Mvc;

namespace ED.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index(string viewType = "grid")
        {
            ViewBag.ActiveView = viewType;
            return View();
        }
    }
}