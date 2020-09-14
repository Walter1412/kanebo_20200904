<style lang="stylus" scoped>
.products1
  background-image url('~assets/images/project/mobile/section1/background.png')
  position relative
  .product
    position relative
    img
      width 100%
    &-image
      width 100%

    &-0-icon
      position absolute
      left 58%
      top 3%
      width width768(150)
      background-image url('~assets/images/project/mobile/section1/product0_icon.png')
      mask-image url('~assets/images/project/mobile/section1/product0_icon.png')
    &-1-icon
      position absolute
      left 58%
      top 3%
      width width768(150)
      background-image url('~assets/images/project/mobile/section1/product1_icon.png')
      mask-image url('~assets/images/project/mobile/section1/product1_icon.png')

    &-4-icon
      position absolute
      right 66%
      top 10%
      width width768(96)
    &-5-icon
      position absolute
      left 73%
      top 9%
      width width768(90)
</style>
<template lang="pug">
.products1.swiper-container(ref="products")
  // Additional required wrapper
  Halo
  .swiper-wrapper
    // Slides
    .product.swiper-slide
      img.product-image(alt="特別增量加大版 DEW 撫紋肌讚組" src="~assets/images/project/mobile/section1/product0.png")
      Light.product-0-icon
        img(alt="" src="~assets/images/project/mobile/section1/product0_icon.png")
    .product.swiper-slide
      img.product-image(alt="特別增量加大版 KANEBO 肌活撫紋神器" src="~assets/images/project/mobile/section1/product1.png")
      Light.product-1-icon
        img(alt="" src="~assets/images/project/mobile/section1/product1_icon.png")
    .product.swiper-slide
      img.product-image(alt="DEW 透亮潤白組" src="~assets/images/project/mobile/section1/product2.png")
    .product.swiper-slide
      img.product-image(alt="Impress 完美極致組" src="~assets/images/project/mobile/section1/product3.png")
    .product.swiper-slide
      img.product-image(alt="BLANCHIR SUPERIOR 亮白煥顏組" src="~assets/images/project/mobile/section1/product4.png")
      Shake.product-4-icon
        img(alt="" src="~assets/images/project/mobile/section1/product4_icon.png")
    .product.swiper-slide
      img.product-image(alt="" src="~assets/images/project/mobile/section1/product5.png")
      Shake.product-5-icon
        img(alt="ALLIE 防曬防護首選" src="~assets/images/project/mobile/section1/product5_icon.png")
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
        // spaceBetween: 30,\
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
