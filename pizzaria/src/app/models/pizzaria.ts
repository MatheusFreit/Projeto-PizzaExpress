export interface pizzaria{
    
    id?:number,
    name: string,
    sobrenome: string,
    Bordas: string,
    Massas:  string,
    sabores: string,
    sabores2: string,
    Situacao: string,
    DatadeCriacao?: string,
    endereco:{
        rua?: string,
        numero?: string,
        bairro?: string,
    }
    
}
//Alteção na declaração 