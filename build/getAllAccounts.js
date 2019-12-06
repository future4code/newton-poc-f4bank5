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
exports.getAllAccounts = () => __awaiter(void 0, void 0, void 0, function* () {
    let textosJson = "";
    const promisefile = ((err, data) => {
        if (err) {
            console.error(err);
            return;
        }
        textosJson += data.toString();
    });
    const promise = new Promise((resolve, reject) => {
        fs_1.readFile("bank.json", (err, data) => {
            promisefile(err, data);
            resolve();
        });
    });
    yield promise;
    return textosJson;
});
exports.getAllAccounts();
//# sourceMappingURL=getAllAccounts.js.map