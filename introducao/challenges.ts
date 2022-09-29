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

// ----------------------------------------------------------------
// Desafio
/*
 Associar todos os tipos do código.
*/
type BankAccount = {
  balance: number,
  deposit: (value: number) => void
}

type AccountHolder = {
  name: string,
  bankAccount: BankAccount,
  contacts: string[]
}

let bankAccount: BankAccount = {
  balance: 3456,
  deposit(value) {
    this.balance += value;
  }
}

let accountHolder: AccountHolder = {
  name: 'Josan Johnata',
  bankAccount: bankAccount,
  contacts: ['34567890', '98765432']
}

accountHolder.bankAccount.deposit(3000)
console.log(accountHolder);
