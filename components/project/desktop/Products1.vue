<style lang="stylus" scoped>
.products1
  background-image url('~assets/images/project/desktop/section1/background.png')
  position relative
  .product
    position relative
    &-image
      width 100%

    &-0-icon
      position absolute
      left 29%
      top 0%
      width width1920(165)
      background-image url('~assets/images/project/desktop/section1/product0_icon.png')
      mask-image url('~assets/images/project/desktop/section1/product0_icon.png')
      img
        width 100%
    &-1-icon
      position absolute
      left 75%
      top 0%
      width width1920(165)
      background-image url('~assets/images/project/desktop/section1/product1_icon.png')
      mask-image url('~assets/images/project/desktop/section1/product1_icon.png')
      img
        width 100%
    &-4-icon
      position absolute
      right 79%
      top 0%
      width width1920(125)
      img
        width 100%
    &-5-icon
      position absolute
      left 89%
      top 20%
      width width1920(125)

      img
        width 100%
</style>
<template lang="pug">
.products1.swiper-container(ref="products")
  // Additional required wrapper
  Halo
  .swiper-wrapper
    // Slides
    .product.swiper-slide
      img.product-image(alt="DEW 撫紋肌讚組 特別增量加大版 年度回饋優惠區 特別增量加大版" src="~assets/images/project/desktop/section1/group0.png")
      Light.product-0-icon
        img(alt="" src="~assets/images/project/desktop/section1/product0_icon.png")
      Light.product-1-icon
        img(alt="" src="~assets/images/project/desktop/section1/product1_icon.png")
    .product.swiper-slide
      img.product-image(alt="KANEBO 肌活撫紋神器 DEW 透亮潤白組 Impress 完美極致組 人氣精選" src="~assets/images/project/desktop/section1/group1.png")
    .product.swiper-slide
      img.product-image(alt="BLANCHIR SUPERIOR 亮白煥顏組 人氣必Buy  ALLIE 防曬防護首選" src="~assets/images/project/desktop/section1/group2.png")
      Shake.product-4-icon
        img(alt="" src="~assets/images/project/desktop/section1/product4_icon.png")
      Shake.product-5-icon
        img(alt="" src="~assets/images/project/desktop/section1/product5_icon.png")

  .swiper-pagination
  .swiper-button-prev
  .swiper-button-next

</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      productsSwiper: null,
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {
    this.init()
  },
  methods: {
    init() {
      this.swiperInit()
    },
    swiperInit() {
      // const Swiper = _swiper.default
      this.productsSwiper = new Swiper(this.$refs.products, {
        // spaceBetween: 30,
        loop: true,
        autoplay: {
          delay: 3000,
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      })
    },
  },
}
</script>
