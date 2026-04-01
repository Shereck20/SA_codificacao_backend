const atores = [
  {
    id: 1,
    nome: "Wagner Moura",
    nascimento: "27/06/1976",
    idade: 49,
    cidadeNatal: "Salvador, Bahia",
  },
  {
    id: 2,
    nome: "Selton Mello",
    nascimento: "30/12/1972",
    idade: 53,
    cidadeNatal: "Passos, Minas Gerais",
  },
  {
    id: 3,
    nome: "Rodrigo Santoro",
    nascimento: "22/08/1975",
    idade: 50,
    cidadeNatal: "Petrópolis, Rio de Janeiro",
  },
  {
    id: 4,
    nome: "Tony Ramos",
    nascimento: "25/08/1948",
    idade: 77,
    cidadeNatal: "Arapongas, Paraná",
  },
  {
    id: 5,
    nome: "Lázaro Ramos",
    nascimento: "01/11/1978",
    idade: 47,
    cidadeNatal: "Salvador, Bahia",
  },
  {
    id: 6,
    nome: "Taís Araújo",
    nascimento: "25/11/1978",
    idade: 47,
    cidadeNatal: "Rio de Janeiro, Rio de Janeiro",
  },
  {
    id: 7,
    nome: "Cauã Reymond",
    nascimento: "20/05/1980",
    idade: 45,
    cidadeNatal: "Rio de Janeiro, Rio de Janeiro",
  },
  {
    id: 8,
    nome: "Juliana Paes",
    nascimento: "26/03/1979",
    idade: 47,
    cidadeNatal: "Rio Bonito, Rio de Janeiro",
  },
  {
    id: 9,
    nome: "Adriana Esteves",
    nascimento: "15/12/1969",
    idade: 56,
    cidadeNatal: "Rio de Janeiro, Rio de Janeiro",
  },
  {
    id: 10,
    nome: "Murilo Benício",
    nascimento: "13/07/1971",
    idade: 54,
    cidadeNatal: "Niterói, Rio de Janeiro",
  },
];

class AtoresBRService {
    getAll(){
        return atores
    }
    
    getBYiD(id){
        return atores.find(atores => atores.id === id)
    }

create(ator){
    const newAtor = {
      id: atores.length > 0 ? atores[atores.length - 1].id + 1 : 1,
      ...ator,
    };
    atores.push(newAtor);
    return newAtor;
  }

updadePatch(id, ator){
  const index = atores.findIndex(atores => parseInt(id));
  if (index === -1) return null;
  if (!nome){
    atores[index] = { ...atores[index], ...ator };
  }
  return atores[index];
}

  delete(id){
    const index = atores.findIndex(atores => parseInt(id));
    if (index === -1) return null;
    atores.splice(index, 1);
    return true;
  }

}

export const atoresService = new AtoresBRService()