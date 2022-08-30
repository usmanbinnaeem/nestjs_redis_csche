/* eslint-disable prettier/prettier */
import { CacheTTL, CACHE_MANAGER, Inject, Injectable } from '@nestjs/common';
import { Cache } from 'cache-manager';

@Injectable()
export class AppService {

  constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache) { }

  fakeModel = {
    id: 1,
    name: 'John Doe',
    email: 'okee@gmail.com',
    phone: '123456789',
    address: '123 Main St',
    createdAt: new Date(),
  }

  async getHello(): Promise<any> {
    const value = await this.cacheManager.get('fname');
    if (value) {
      return {
        data: value,
        FromRedis: "this is loaded from redis cache"
      }
    }
    if (!value) {
      await this.cacheManager.set('fname', 'Hello World', { ttl: 3600 });
      return {
        data: 'Hello World',
        FromStringRedis: "this string is saved in redis cache"
      }
    }
  }

  async getAutoHello(): Promise<any> {
    console.log('-------> fake model', this.fakeModel);

    this.fakeModel;
  }
}
