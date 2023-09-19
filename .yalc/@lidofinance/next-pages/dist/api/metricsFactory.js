export const metricsFactory = ({ registry }) => async (_req, res) => {
    const collectedMetrics = await registry.metrics();
    res.send(collectedMetrics);
};
