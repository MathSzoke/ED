using System.Collections.Generic;
using System.Web.Mvc;

namespace ED.Controllers
{
    public class PositionsController : Controller
    {
        public ActionResult Add(int parentId, int functionId, int junction, string reason, string status)
        {
            var testNode = new
            {
                Function = new
                {
                    ID = 53,
                    ParentID = parentId,
                    Nome = "Nova Posição de Teste"
                },
                PositionCode = 9015190043,
                Junction = junction,
                Role = "Other",
                IsHub = false,
                Subordinates = new List<object>()
            };

            return Json(new
            {
                success = true,
                newPosition = testNode,
                message = "Posição de teste adicionada com sucesso"
            }, JsonRequestBehavior.AllowGet);
        }
    }
}