/* eslint-disable prettier/prettier */
import { CacheInterceptor, Controller, Get, UseInterceptors } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,

  ) { }

  @Get('cache')
  async getHello(): Promise<any> {
    return this.appService.getHello();
  }

  @UseInterceptors(CacheInterceptor)
  @Get('auto-cache')
  async getAutoHello(): Promise<any> {
    return this.appService.getAutoHello();
  }
}
