/* eslint-disable prettier/prettier */
import { CACHE_MANAGER, Inject, Injectable } from '@nestjs/common';
import { Cache } from 'cache-manager';

@Injectable()
export class AppService {

  constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache) { }

  /**
 * 
 *Cache Applied to specific method
 *
 */

  async getHello(): Promise<any> {
    // const value = await this.cacheManager.get('string');
    // await this.cacheManager.reset();
    // if (value) {
    // console.log('----->? value', value);

    //   return {
    //     data: value,
    //     FromRedis: "this is loaded from redis cache"
    //   }
    // }
    // if (!value) {
    //   await this.cacheManager.set('string', 'Hello World', { ttl: 60 });
    //   return {
    //     data: 'Hello World',
    //     FromStringRedis: "this string is saved in redis cache"
    //   }
    // }
  }



  /**
   * 
   *Using Global Cache
   *
   */
  async getName(): Promise<any> {
    const cache = await this.cacheManager.set('name', 'Usman Naeem')
    console.log('cache Enabled again', cache);
    return "This is from service";
  }

}
