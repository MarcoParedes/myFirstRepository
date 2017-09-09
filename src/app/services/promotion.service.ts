import { Injectable } from '@angular/core';

import { Promotion } from '../shared/promotion';
import { PROMOTION } from '../shared/promotions';

@Injectable()
export class PromotionService {

  constructor() { }

  getPromotions(): Promotion[]{
    return PROMOTION;
  }

  getPromotion(id: number): Promotion {
    return PROMOTION.filter((x)=> x.id === id)[0];
  }

  getFeaturedPromotion(): Promotion {
    return PROMOTION.filter((x) => x.featured)[0];
  }

}
