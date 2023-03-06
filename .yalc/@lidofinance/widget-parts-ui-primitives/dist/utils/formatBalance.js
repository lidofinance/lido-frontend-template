"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatBalance = void 0;
const ethers_1 = require("ethers");
const { formatEther } = ethers_1.utils;
const { Zero } = ethers_1.constants;
const formatBalance = (balance = Zero, maxDecimalDigits = 4) => {
    const balanceString = formatEther(balance);
    if (balanceString.includes('.')) {
        const parts = balanceString.split('.');
        return parts[0] + '.' + parts[1].slice(0, maxDecimalDigits);
    }
    return balanceString;
};
exports.formatBalance = formatBalance;
