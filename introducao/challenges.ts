// Desafio
/*
    Criar um objeto funcionário com:
        - Array de strings com os nomes dos supervisores
        - Função de bater ponto que recebe a hora (número)
        e retorna uma string
            -> Ponto normal (<= 8)
            -> Fora do horário (> 8)
*/

// Alias for the types for to use in everywhere in my code
type Employees = {
  supervising: string[],
  hitWorkPoint: (hour: number) => string
}

let employees: Employees = {
  supervising: ['John', 'Eide', 'Ester'],
  hitWorkPoint(hour: number): string {
    if(hour <= 8) {
      return 'Ponto normal!';
    } return'Fora do horário!';
    
  }
};


console.log(employees.supervising);
console.log(employees.hitWorkPoint(8));
console.log(employees.hitWorkPoint(9));