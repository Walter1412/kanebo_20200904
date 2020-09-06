<style lang="stylus" scoped>
.products1
  background-image url('~assets/images/project/mobile/section0/background.png')
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
    &-1-icon
      position absolute
      left 58%
      top 3%
      width width768(150)

    &-4-icon
      position absolute
      right 66%
      top 10%
      width width768(96)
    &-5-icon
      position absolute
      left 69%
      top 7%
      width width768(90)
</style>
<template lang="pug">
.products1.swiper-container(ref="products")
  // Additional required wrapper
  .swiper-wrapper
    // Slides
    .product.swiper-slide
      img.product-image(src="~assets/images/project/mobile/section1/product0.png")
      Light.product-0-icon
        img(src="~assets/images/project/mobile/section1/product0_icon.png")
    .product.swiper-slide
      img.product-image(src="~assets/images/project/mobile/section1/product1.png")
      Light.product-1-icon
        img(src="~assets/images/project/mobile/section1/product1_icon.png")
    .product.swiper-slide
      img.product-image(src="~assets/images/project/mobile/section1/product2.png")
    .product.swiper-slide
      img.product-image(src="~assets/images/project/mobile/section1/product3.png")
    .product.swiper-slide
      img.product-image(src="~assets/images/project/mobile/section1/product4.png")
      Shake.product-4-icon
        img(src="~assets/images/project/mobile/section1/product4_icon.png")
    .product.swiper-slide
      img.product-image(src="~assets/images/project/mobile/section1/product5.png")
      Shake.product-5-icon
        img(src="~assets/images/project/mobile/section1/product5_icon.png")
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
      this.productsSwiper = new Window.Swiper(this.$refs.products, {
        // spaceBetween: 30,
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
