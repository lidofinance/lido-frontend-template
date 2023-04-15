"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.metricsFactory = void 0;
const metricsFactory = ({ registry }) => async (_req, res) => {
    const collectedMetrics = await registry.metrics();
    res.send(collectedMetrics);
};
exports.metricsFactory = metricsFactory;
