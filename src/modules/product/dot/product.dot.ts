export class ProductDto {
  readonly id?: number;
  readonly title: string;
  readonly showTitle: string;
  readonly subTitle: string;
  readonly tags: string;
  readonly thum: string;
  readonly imgs: string;
  readonly info: string;
  readonly config: string;
  readonly sort1: number;
  readonly sort2: number;
  readonly psort: number;
  readonly price: number;
  readonly count: number;
  readonly tip: string;
  readonly sellNum: number;
  // 是否为首页轮播
  readonly isHomeSwiper: number;
  readonly homeSwiperNum: number;
  // 是否为今日特价
  readonly isHomeCheap: number;
  readonly homeCheapNum: number;
  // 是否为新品专区
  readonly isHomeNewProduct: number;
  readonly homeNewProductNum: number;
  readonly isDelete: number;
}
