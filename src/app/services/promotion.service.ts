import { Injectable } from '@angular/core';

import { Promotion } from '../shared/promotion';
import { PROMOTION } from '../shared/promotions';

@Injectable()
export class PromotionService {

  constructor() { }

  getPromotions(): Promise<Promotion[]>{
    return Promise.resolve(PROMOTION);
  }

  getPromotion(id: number): Promise<Promotion> {
    return Promise.resolve(PROMOTION.filter((x)=> x.id === id)[0]);
  }

  getFeaturedPromotion(): Promise<Promotion> {
    return Promise.resolve(PROMOTION.filter((x) => x.featured)[0]);
  }

}
