using ED.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Mvc;

namespace ED.Controllers
{
    public class PlatformController : Controller
    {
        public ActionResult Index()
        {
            return PartialView();
        }

        public ActionResult Index_v2()
        {
            // 1. Dados de Hierarquia (todas as posições existem, algumas podem estar vazias)
            var hierarchies = new List<Hierarquia>
            {
                new Hierarquia { Juncao = 1519, PosicaoGestao = 981519001, PosicaoRelac = 971519001, PosicaoAssist = 961519001 },
                new Hierarquia { Juncao = 1519, PosicaoGestao = 981519002, PosicaoRelac = 971519002, PosicaoAssist = 961519002 },
                new Hierarquia { Juncao = 1519, PosicaoGestao = 981519003, PosicaoRelac = 971519003, PosicaoAssist = 961519003 }
            };

            // 2. Todas as posições existentes (incluindo não hierárquicas)
            var positions = new List<Posicao>
            {
                // Gerente de Plataforma
                new Posicao { CodigoPosicao = 991519000, Juncao = 1519, CodigoFuncao = 1, Hub = false },
        
                // Gerentes de Gestão
                new Posicao { CodigoPosicao = 981519001, Juncao = 1519, CodigoFuncao = 2, Hub = true, HubName = "Hub SP 1" },
                new Posicao { CodigoPosicao = 981519002, Juncao = 1519, CodigoFuncao = 2, Hub = true, HubName = "Hub SP 2" },
                new Posicao { CodigoPosicao = 981519003, Juncao = 1519, CodigoFuncao = 2, Hub = false },
        
                // Gerentes de Relacionamento
                new Posicao { CodigoPosicao = 971519001, Juncao = 1519, CodigoFuncao = 3, Hub = true, HubName = "Hub SP 1" },
                new Posicao { CodigoPosicao = 971519002, Juncao = 1519, CodigoFuncao = 3, Hub = true, HubName = "Hub SP 2" },
                new Posicao { CodigoPosicao = 971519003, Juncao = 1519, CodigoFuncao = 3, Hub = false },
        
                // Assistente
                new Posicao { CodigoPosicao = 961519001, Juncao = 1519, CodigoFuncao = 4, Hub = true, HubName = "Hub SP 1" },
                new Posicao { CodigoPosicao = 961519002, Juncao = 1519, CodigoFuncao = 4, Hub = true, HubName = "Hub SP 2" },
                new Posicao { CodigoPosicao = 961519003, Juncao = 1519, CodigoFuncao = 4, Hub = false },
        
                // Outras funções (não hierárquicas)
                new Posicao { CodigoPosicao = 901519001, Juncao = 1519, CodigoFuncao = 5, Hub = false }, // Desenvolvedor
                new Posicao { CodigoPosicao = 901519002, Juncao = 1519, CodigoFuncao = 6, Hub = false }, // Analista
                new Posicao { CodigoPosicao = 901519003, Juncao = 1519, CodigoFuncao = 7, Hub = false }  // Agente de Projetos
            };

            // 3. Definição de TODAS as funções
            var functions = new List<Funcao>
            {
                new Funcao { Id = 1, Nome = "Gerente de Plataforma", FuncaoPaiID = 0 },
                new Funcao { Id = 2, Nome = "Gerente de Gestão", FuncaoPaiID = 1 },
                new Funcao { Id = 3, Nome = "Gerente de Relacionamento", FuncaoPaiID = 2 },
                new Funcao { Id = 4, Nome = "Assistente", FuncaoPaiID = 3 },
                new Funcao { Id = 5, Nome = "Desenvolvedor", FuncaoPaiID = 1 },
                new Funcao { Id = 6, Nome = "Analista", FuncaoPaiID = 1 },
                new Funcao { Id = 7, Nome = "Agente de Projetos", FuncaoPaiID = 1 }
            };

            // 4. Funcionários (algumas posições estarão vazias)
            var employees = new List<Funcionario>
            {
                // Gerente de Plataforma
                new Funcionario { ID = 1, Nome = "Carlos Silva", Posicao = 991519000, CodigoFuncional = "GP001" },
        
                // Gerentes de Gestão (1 vazio)
                new Funcionario { ID = 2, Nome = "Ana Oliveira", Posicao = 981519001, CodigoFuncional = "GG001" },
                new Funcionario { ID = 3, Nome = "Bruno Costa", Posicao = 981519002, CodigoFuncional = "GG002" },
                // 981519003 vazio
        
                // Gerentes de Relacionamento (1 vazio)
                new Funcionario { ID = 4, Nome = "Daniela Lima", Posicao = 971519001, CodigoFuncional = "GR001" },
                // 971519002 vazio
                new Funcionario { ID = 5, Nome = "Eduardo Santos", Posicao = 971519003, CodigoFuncional = "GR003" },
        
                // Assistente (1 vazio)
                new Funcionario { ID = 6, Nome = "Fernanda Rocha", Posicao = 961519001, CodigoFuncional = "AS001" },
                new Funcionario { ID = 7, Nome = "Gabriel Almeida", Posicao = 961519002, CodigoFuncional = "AS002" },
                // 961519003 vazio
        
                // Outras funções (algumas vazias)
                new Funcionario { ID = 8, Nome = "Helena Torres", Posicao = 901519001, CodigoFuncional = "DEV001" },
                // 901519002 vazio (Analista)
                new Funcionario { ID = 9, Nome = "Igor Mendes", Posicao = 901519003, CodigoFuncional = "AP001" }
            };

            // Construir o organograma
            var organograma = BuildOrganograma(hierarchies, positions, functions, employees);
            return PartialView("Index_v2", organograma);
        }

        private object BuildOrganograma(List<Hierarquia> hierarchies, List<Posicao> positions, List<Funcao> functions, List<Funcionario> employees)
        {
            var positionDict = positions.ToDictionary(p => p.CodigoPosicao);
            var employeeDict = employees.ToDictionary(e => e.Posicao);
            var functionDict = functions.ToDictionary(f => f.Id);

            // 1. Encontrar o Gerente de Plataforma (GP)
            var gpPosition = positions.First(p => p.CodigoFuncao == functions.First(f => f.Nome == "Gerente de Plataforma").Id);
            var gpEmployee = employeeDict.ContainsKey(gpPosition.CodigoPosicao) ? employeeDict[gpPosition.CodigoPosicao] : null;

            // 2. Construir nó raiz
            var organograma = new
            {
                PositionCode = gpPosition.CodigoPosicao,
                Junction = gpPosition.Juncao,
                Role = "Gerente de Plataforma",
                Function = new
                {
                    ID = gpPosition.CodigoFuncao,
                    Nome = functionDict[gpPosition.CodigoFuncao].Nome,
                    ParentID = 0
                },
                IsHub = gpPosition.Hub,
                HubName = gpPosition.HubName,
                Occupant = gpEmployee != null ? new
                {
                    Name = gpEmployee.Nome,
                    FunctionalCode = gpEmployee.CodigoFuncional,
                    Since = gpEmployee.OcupaFuncaoDesde?.ToString("yyyy-MM-dd")
                } : null,
                Subordinates = new List<object>()
            };

            // 3. Processar todas as posições hierárquicas
            foreach (var hierarchy in hierarchies)
            {
                // A. Gerente de Gestão (GG)
                var ggPosition = positionDict[hierarchy.PosicaoGestao.Value];
                var ggEmployee = employeeDict.ContainsKey(ggPosition.CodigoPosicao) ? employeeDict[ggPosition.CodigoPosicao] : null;

                var ggNode = new
                {
                    PositionCode = ggPosition.CodigoPosicao,
                    Junction = ggPosition.Juncao,
                    Role = "Gerente de Gestão",
                    Function = new
                    {
                        ID = ggPosition.CodigoFuncao,
                        Nome = functionDict[ggPosition.CodigoFuncao].Nome,
                        ParentID = gpPosition.CodigoFuncao
                    },
                    IsHub = ggPosition.Hub,
                    HubName = ggPosition.HubName,
                    Occupant = ggEmployee != null ? new
                    {
                        Name = ggEmployee.Nome,
                        FunctionalCode = ggEmployee.CodigoFuncional,
                        Since = ggEmployee.OcupaFuncaoDesde?.ToString("yyyy-MM-dd")
                    } : null,
                    Subordinates = new List<object>()
                };

                // B. Gerente de Relacionamento (GR)
                var grPosition = positionDict[hierarchy.PosicaoRelac.Value];
                var grEmployee = employeeDict.ContainsKey(grPosition.CodigoPosicao) ? employeeDict[grPosition.CodigoPosicao] : null;

                var grNode = new
                {
                    PositionCode = grPosition.CodigoPosicao,
                    Junction = grPosition.Juncao,
                    Role = "Gerente de Relacionamento",
                    Function = new
                    {
                        ID = grPosition.CodigoFuncao,
                        Nome = functionDict[grPosition.CodigoFuncao].Nome,
                        ParentID = ggPosition.CodigoFuncao
                    },
                    IsHub = grPosition.Hub,
                    HubName = grPosition.HubName,
                    Occupant = grEmployee != null ? new
                    {
                        Name = grEmployee.Nome,
                        FunctionalCode = grEmployee.CodigoFuncional,
                        Since = grEmployee.OcupaFuncaoDesde?.ToString("yyyy-MM-dd")
                    } : null,
                    Subordinates = new List<object>()
                };

                // C. Assistente (AS)
                var asPosition = positionDict[hierarchy.PosicaoAssist.Value];
                var asEmployee = employeeDict.ContainsKey(asPosition.CodigoPosicao) ? employeeDict[asPosition.CodigoPosicao] : null;

                var asNode = new
                {
                    PositionCode = asPosition.CodigoPosicao,
                    Junction = asPosition.Juncao,
                    Role = "Assistente",
                    Function = new
                    {
                        ID = asPosition.CodigoFuncao,
                        Nome = functionDict[asPosition.CodigoFuncao].Nome,
                        ParentID = grPosition.CodigoFuncao
                    },
                    IsHub = asPosition.Hub,
                    HubName = asPosition.HubName,
                    Occupant = asEmployee != null ? new
                    {
                        Name = asEmployee.Nome,
                        FunctionalCode = asEmployee.CodigoFuncional,
                        Since = asEmployee.OcupaFuncaoDesde?.ToString("yyyy-MM-dd")
                    } : null,
                    Subordinates = new List<object>()
                };

                grNode.Subordinates.Add(asNode);
                ggNode.Subordinates.Add(grNode);
                organograma.Subordinates.Add(ggNode);
            }

            // 4. Adicionar TODAS as outras posições não hierárquicas
            var nonHierarchicalFunctions = functions
                .Where(f => f.FuncaoPaiID == gpPosition.CodigoFuncao && f.Nome != "Gerente de Gestão")
                .Select(f => f.Id)
                .ToList();

            var otherPositions = positions
                .Where(p => nonHierarchicalFunctions.Contains(p.CodigoFuncao))
                .GroupBy(p => p.CodigoFuncao)
                .SelectMany(g => g)
                .Select(p => {
                    var employee = employeeDict.ContainsKey(p.CodigoPosicao) ? employeeDict[p.CodigoPosicao] : null;
                    var function = functionDict[p.CodigoFuncao];

                    return new
                    {
                        PositionCode = p.CodigoPosicao,
                        Junction = p.Juncao,
                        Role = function.Nome,
                        Function = new
                        {
                            ID = function.Id,
                            Nome = function.Nome,
                            ParentID = gpPosition.CodigoFuncao
                        },
                        IsHub = p.Hub,
                        HubName = p.HubName,
                        Occupant = employee != null ? new
                        {
                            Name = employee.Nome,
                            FunctionalCode = employee.CodigoFuncional,
                            Since = employee.OcupaFuncaoDesde?.ToString("yyyy-MM-dd")
                        } : null,
                        Subordinates = new List<object>()
                    };
                });

            foreach (var position in otherPositions)
            {
                organograma.Subordinates.Add(position);
            }

            return organograma;
        }
    }
}