﻿CREATE TABLE [producao].[TB_RH_ESTRUTURA_Funcoes](
    Id INT IDENTITY(1,1) PRIMARY KEY,
    Nome VARCHAR(75) NULL,
    FuncaoPaiID INT NULL,
    TipoUnidade VARCHAR(2) NULL
)