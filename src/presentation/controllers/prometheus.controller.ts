import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';
import { register } from 'prom-client'; 

@Controller('metrics')
export class MetricsController {
  @Get()
  async getMetrics(@Res() res: Response) {
    try {
      const metrics = await register.metrics();
      res.set('Content-Type', register.contentType);
      res.send(metrics);
    } catch (err) {
      res.status(500).send(err.message);
    }
  }
}
