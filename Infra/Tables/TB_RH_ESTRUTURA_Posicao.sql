CREATE TABLE [producao].[TB_RH_ESTRUTURA_Posicao](
    Id INT IDENTITY(1,1) PRIMARY KEY,
    CodigoPosicao BIGINT,
    Juncao INT NULL,
    CodigoFuncao INT,
    Hub BIT DEFAULT 0
)
