import { writeFile } from 'fs'
import * as moment from "moment";
import { getAllAccounts } from "./getAllAccounts"

export type conta = {
    nome: string
    CPF: number
    data: moment.Moment
    saldo: number
    extratos: extrato[]
}

export type extrato = {
    descrição: string 
    data: moment.Moment
    valor: number
}

const criarConta = async (conta: conta) => {
    if (moment().diff(conta.data, "years") < 18){ 
        console.error("Erro, você é menor de idade")
        return
    }
    const todasContas = await getAllAccounts()
    const contasObjetos = JSON.parse(todasContas)
    
    let operação: boolean;
    contasObjetos.contas.forEach( (contaAntiga: conta) => {
        if (contaAntiga.CPF === conta.CPF){
            console.log(contaAntiga.CPF === conta.CPF)
            operação = false
        }
        })
    if (operação === false ){
        console.error("Erro. Usuario já cadastrado")
        return
    }
    
    contasObjetos.contas.push(conta)

    writeFile("bank.json", JSON.stringify(contasObjetos), () => { })
}

const cont01: conta = {
    nome: "string",
    CPF: 1,
    data: moment("02/12/2001", "DD/MM/YYYY"),
    saldo: 0,
    extratos: []
}

criarConta(cont01)