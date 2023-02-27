import { Client } from "./Client.js";
import { ContaCorrente } from "./ContaCorrente.js";

const client1 = new Client();
client1.nome = "Ricarod";
client1.cpf = "21312312";

const contaCorrentRicardo = new ContaCorrente();
contaCorrentRicardo.agencia = 1001;

contaCorrentRicardo.depositar(200);
const valorSacado = contaCorrentRicardo.sacar(35);
console.log(`Esse e o valor scado$ {valorSacado}`);

console.log(client1);
console.log(contaCorrentRicardo);
