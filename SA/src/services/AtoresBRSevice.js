const atores = [
  {
    nome: "Wagner Moura",
    nascimento: "27/06/1976",
    idade: 49,
    cidadeNatal: "Salvador, Bahia",
    filhos: 3
  },
  {
    nome: "Selton Mello",
    nascimento: "30/12/1972",
    idade: 53,
    cidadeNatal: "Passos, Minas Gerais",
    filhos: 0
  },
  {
    nome: "Rodrigo Santoro",
    nascimento: "22/08/1975",
    idade: 50,
    cidadeNatal: "Petrópolis, Rio de Janeiro",
    filhos: 2
  },
  {
    nome: "Tony Ramos",
    nascimento: "25/08/1948",
    idade: 77,
    cidadeNatal: "Arapongas, Paraná",
    filhos: 2
  }
];

class AtoresBRService {
    getAll(){
        return atores
    }
    
    getBYiD(id){
        return atores.find(atores => atores.id === id)
    }
}

export const atoresService = new AtoresBRService()