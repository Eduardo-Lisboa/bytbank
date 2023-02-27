import { Client } from "./Client.js";
import { ContaCorrente } from "./ContaCorrente.js";

const client1 = new Client("Ricadordo", 1232131312);
const client2 = new Client("Eduardo", 1232131312);

const contaCorrentRicardo = new ContaCorrente(client1, 1002);
const conta2 = new ContaCorrente(client2, 1001);

console.log(ContaCorrente.numeroDeContas);
