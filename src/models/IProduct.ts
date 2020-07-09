export interface IProduct {
    adminId: number;
    algo: string;
    brandId: number;
    catPath: string;
    categoryId: string;
    categoryInfo: { id: string; title: string }[];
    counterLike: number;
    counterView: number;
    finalPrice: number;
    finalPriceApp: number;
    finalPriceMax: number;
    finalPriceMaxApp: number;
    finalPromotionPercent: number;
    freeShipping: boolean;
    id: string;
    image: string;
    imgUrl: string;
    imgUrlMob: string;
    isCertified: number;
    isConfigVariant: boolean;
    minMaxPrice: string;
    minPrice: string;
    name: string;
    namePath: string;
    options: any[];
    orderCount: number;
    orderCountDd1000Cod: number;
    originalPrice: string;
    packageDiscount: any[];
    percentStar: number;
    price: number;
    priceMax: number;
    productId: number;
    shopInfo: {
      shop_name: string;
      good_review_percent: number;
    };
    shopName: string;
    sku: string;
    skuUser: string;
    shortDescription: string;
  }
  