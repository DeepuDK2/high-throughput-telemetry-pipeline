import express from 'express';
import { router } from './api/routes';

const app = express();
app.use(express.json());

app.use('/api/v1', router);

app.get('/health', (req, res) => {
  res.json({
    status: 'healthy',
    project: 'High-Throughput Timeseries Telemetry Pipeline & Live SSE Dashboard',
    version: '1.0.0',
    timestamp: new Date().toISOString(),
  });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`🚀 High-Throughput Timeseries Telemetry Pipeline & Live SSE Dashboard running on port ${PORT}`);
});
