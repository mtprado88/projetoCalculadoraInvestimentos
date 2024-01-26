//contrato
// 1-Sistema deve usar o Tailwindcss
// 2-Sistema deve ter um elemento html do tipo table (com id definido) preparado e sem informações dentro
// 3-Sao necessarios dois arrays apra a geração da tabela...
//     3.1-Um array de dados
//     3.2-Um array co objetos que caracterizam  as colunas
//     3.3=nao é necessario,mas pode-se passar uma função de formatação dos dados daquela coluna

type columnObject = {
    columnLabel: string;
    accessor: string;
    formatFN?: (info:number | string) => string;
};

type columnsArray =columnObject[];

