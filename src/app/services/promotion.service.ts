import { Injectable } from '@angular/core';

import { Promotion } from '../shared/promotion';
import { PROMOTION } from '../shared/promotions';

@Injectable()
export class PromotionService {

  constructor() { }

  getPromotions(): Promise<Promotion[]>{
    return new Promise(resolve => {
      // Simulate server latency with 2 second delay
      setTimeout(() => resolve(PROMOTION), 2000);
    });
  }

  getPromotion(id: number): Promise<Promotion> {
    // Simulate server latency with 2 second delay
    return new Promise(resolve => {
      setTimeout(() => resolve(PROMOTION.filter((x)=> x.id === id)[0]), 2000);
    });
  }

  getFeaturedPromotion(): Promise<Promotion> {
    return new Promise(resolve => {
      // Simulate server latency with 2 second delay
      setTimeout(() => {
        resolve(PROMOTION.filter((x) => x.featured)[0]);
      }, 2000);
    });
  }

}
