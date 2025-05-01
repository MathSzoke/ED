// Models/Hierarquia.cs
using System;
using System.Collections.Generic;

namespace ED.Models
{
    public class Hierarquia
    {
        public DateTime? tsUpdate { get; set; }
        public int Juncao { get; set; }
        public long? PosicaoGestao { get; set; }
        public long? PosicaoRelac { get; set; }
        public long? PosicaoAssist { get; set; }
    }

    // Models/Funcionario.cs
    public class Funcionario
    {
        public int ID { get; set; }
        public string Nome { get; set; }
        public int Juncao { get; set; }
        public string CodigoFuncional { get; set; }
        public int Funcao { get; set; }
        public long Posicao { get; set; }
        public DateTime? PreencheuPosicaoEm { get; set; }
        public DateTime? OcupaFuncaoDesde { get; set; }
    }

    // Models/Posicao.cs
    public class Posicao
    {
        public int Id { get; set; }
        public long CodigoPosicao { get; set; }
        public int Juncao { get; set; }
        public int CodigoFuncao { get; set; }
        public bool Hub { get; set; }
        public string HubName { get; set; }
    }

    // Models/Funcao.cs
    public class Funcao
    {
        public int Id { get; set; }
        public string Nome { get; set; }
        public int FuncaoPaiID { get; set; }
        public string TipoUnidade { get; set; }
    }

    public class OrganogramaNode
    {
        public long? PositionCode { get; set; }
        public string Role { get; set; }
        public bool IsHub { get; set; }
        public string HubName { get; set; }
        public FuncaoInfo Function { get; set; }
        public OccupantInfo Occupant { get; set; }
        public List<OrganogramaNode> Subordinates { get; set; }
    }

    public class FuncaoInfo
    {
        public int ID { get; set; }
        public int ParentID { get; set; }
    }

    public class OccupantInfo
    {
        public string Name { get; set; }
        public string FunctionalCode { get; set; }
        public string Since { get; set; }
    }
}