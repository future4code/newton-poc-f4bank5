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
const getAllAccounts_1 = require("./getAllAccounts");
const moment = require("moment");
const getBalance = (nome, CPF) => __awaiter(void 0, void 0, void 0, function* () {
    const todasContas = yield getAllAccounts_1.getAllAccounts();
    const contasObjetos = JSON.parse(todasContas);
    let selecionada = {
        nome: "",
        CPF: 0,
        data: moment(),
        saldo: 0,
        extratos: []
    };
    contasObjetos.contas.forEach((conta) => {
        if (conta.CPF === CPF)
            selecionada = conta;
    });
    if (selecionada.nome === nome)
        return selecionada.saldo;
    else
        console.error("Dados incorretos");
});
const b = () => __awaiter(void 0, void 0, void 0, function* () {
    let a = yield getBalance("string", 2);
    console.log(a);
});
b();
//# sourceMappingURL=getBalance.js.map