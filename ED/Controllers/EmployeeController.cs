using System.Collections.Generic;
using System.Web.Mvc;

namespace ED.Controllers
{
    public class EmployeeController : Controller
    {
        public ActionResult Candidates(int parentId, int junction)
        {
            var candidates = new List<object>
            {
                new {
                    FunctionalCode = "m503667",
                    Name = "Matheus Szoke"
                },
                new {
                    FunctionalCode = "m503666",
                    Name = "Lucas Araujo"
                },
                new {
                    FunctionalCode = "m503668",
                    Name = "Vinicius"
                }
            };
            return Json(candidates, JsonRequestBehavior.AllowGet);
        }
    }
}