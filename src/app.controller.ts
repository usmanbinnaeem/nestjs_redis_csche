/* eslint-disable prettier/prettier */
import { CacheTTL, Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,

  ) { }

  // @CacheTTL(60)
  // @Get('cache')
  // async getHello(): Promise<any> {
  //   return this.appService.getHello();
  // }

  @CacheTTL(5)
  @Get('name')
  async getName(): Promise<any> {
    return this.appService.getName();
  }
}
