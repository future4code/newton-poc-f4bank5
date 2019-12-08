import { getAllAccounts } from "./getAllAccounts"
import { writeFile } from 'fs'
import { conta, extrato } from "./criarConta"
import moment = require("moment")

const addBalance = async (nome: string, CPF: number, valor: number ) => {
    const todasContas = await getAllAccounts()
    const contasObjetos = JSON.parse(todasContas)

    let selecionada: conta = {
        nome: "",
        CPF: 0,
        data: moment(),
        saldo: 0,
        extratos: []
    }
    
    contasObjetos.contas.forEach((conta: conta) => {
        if (conta.CPF === CPF)
            selecionada = conta
    })
    if (selecionada.nome === nome){
        selecionada.saldo += valor
        const extrato: extrato = {
            descrição: "Deposito de dinheiro",
            data: moment(),
            valor: valor
        }
        selecionada.extratos.push(extrato)
        writeFile("bank.json", JSON.stringify(contasObjetos ), () => { })
    } 
    else
        console.error("Dados incorretos")
}


addBalance("string", 3, 20)