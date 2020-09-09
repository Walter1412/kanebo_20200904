<style lang="stylus" scoped>
.products2
  background-image url('~assets/images/project/mobile/section2/background.png')
  .product
    position relative
    height
    img
      width 100%
    &-image
      width 100%

    &-0-icon
      position absolute
      right 75%
      top 9%
      width width768(96)
    &-2-icon
      position absolute
      right 74%
      top 10%
      width width768(96)

    &-3-icon
      position absolute
      left 59%
      top 14%
      width width768(96)
</style>
<template lang="pug">
.products2.swiper-container(ref="products")
  // Additional required wrapper
  .swiper-wrapper
    // Slides
    .product.swiper-slide
      img.product-image(src="~assets/images/project/mobile/section2/product0.png")
      Shake.product-0-icon
        img(src="~assets/images/project/mobile/section2/product0_icon.png")
    .product.swiper-slide
      img.product-image(src="~assets/images/project/mobile/section2/product1.png")
    .product.swiper-slide
      img.product-image(src="~assets/images/project/mobile/section2/product2.png")
      Shake.product-2-icon
        img(src="~assets/images/project/mobile/section2/product2_icon.png")
    .product.swiper-slide
      img.product-image(src="~assets/images/project/mobile/section2/product3.png")
      Shake.product-3-icon
        img(src="~assets/images/project/mobile/section2/product3_icon.png")
    .product.swiper-slide
      img.product-image(src="~assets/images/project/mobile/section2/product4.png")
    .product.swiper-slide
      img.product-image(src="~assets/images/project/mobile/section2/product5.png")
    .product.swiper-slide
      img.product-image(src="~assets/images/project/mobile/section2/product6.png")
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
