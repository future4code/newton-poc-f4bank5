"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const moment = require("moment");
const getAllAccounts_1 = require("./getAllAccounts");
const criarConta = (conta) => __awaiter(void 0, void 0, void 0, function* () {
    if (moment().diff(conta.data, "years") < 18) {
        console.error("Erro, você é menor de idade");
        return;
    }
    const todasContas = yield getAllAccounts_1.getAllAccounts();
    const contasObjetos = JSON.parse(todasContas);
    let operação;
    contasObjetos.contas.forEach((contaAntiga) => {
        if (contaAntiga.CPF === conta.CPF) {
            console.log(contaAntiga.CPF === conta.CPF);
            operação = false;
        }
    });
    if (operação === false) {
        console.error("Erro. Usuario já cadastrado");
        return;
    }
    contasObjetos.contas.push(conta);
    fs_1.writeFile("bank.json", JSON.stringify(contasObjetos), () => { });
});
const cont01 = {
    nome: "string",
    CPF: 1,
    data: moment("02/12/2001", "DD/MM/YYYY"),
    saldo: 0,
    extratos: []
};
criarConta(cont01);
//# sourceMappingURL=criarConta.js.map