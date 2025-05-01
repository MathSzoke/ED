using ED.Models;
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

        public ActionResult AvailableFunctions(int parentId, int junction)
        {
            var functions = new List<Funcao>
            {
                new Funcao
                {
                    Id = 10,
                    Nome = "Auxiliar de Limpeza",
                    FuncaoPaiID = 1,
                },
                new Funcao
                {
                    Id = 11,
                    Nome = "Analista de Projetos",
                    FuncaoPaiID = 1,
                },
                new Funcao
                {
                    Id = 12,
                    Nome = "Administrador de Cargas",
                    FuncaoPaiID = 1,
                },
                new Funcao
                {
                    Id = 13,
                    Nome = "Data analyst 3",
                    FuncaoPaiID = 1,
                },
                new Funcao
                {
                    Id = 14,
                    Nome = "Desenvolvedor Android",
                    FuncaoPaiID = 1,
                },
                new Funcao
                {
                    Id = 15,
                    Nome = "Grow Marketing Lead",
                    FuncaoPaiID = 1,
                },
                new Funcao
                {
                    Id = 16,
                    Nome = "Marketing Digital Analyst",
                    FuncaoPaiID = 1,
                }
            };

            return Json(functions, JsonRequestBehavior.AllowGet);
        }
    }
}