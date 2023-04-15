"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.health = void 0;
const health = (_req, res) => {
    res.status(200).send({ status: 'ok' });
};
exports.health = health;
