import {getAllAccounts} from "./getAllAccounts"
import {conta} from "./criarConta"
import moment = require("moment")

const getBalance = async (nome : string, CPF: number) => {
    const todasContas = await getAllAccounts()
    const contasObjetos = JSON.parse(todasContas)
   
    let selecionada: conta = {
        nome: "",
        CPF: 0,
        data: moment(),
        saldo: 0,
        extratos: []
    }

    contasObjetos.contas.forEach((conta:conta)=> {
        if(conta.CPF === CPF)
            selecionada = conta
    })

    if (selecionada.nome === nome)
        return selecionada.saldo
    else 
        console.error("Dados incorretos")
}

const b = async () =>{
let a = await getBalance("string", 1)
console.log(a)
}
b()