<style lang="stylus" scoped>
.products4
  background-image url('~assets/images/project/mobile/section4/background.png')
  .product
    position relative
    img
      width 100%
    &-image
      width 100%

    &-1-icon
      position absolute
      right 65%
      top 3%
      width width768(96)
    &-2-icon
      position absolute
      right 75%
      top 3%
      width width768(96)
</style>
<template lang="pug">
.products4.swiper-container(ref="products")
  // Additional required wrapper
  .swiper-wrapper
    // Slides
    .product.swiper-slide
      img.product-image(src="~assets/images/project/mobile/section4/product0.png")
    .product.swiper-slide
      img.product-image(src="~assets/images/project/mobile/section4/product1.png")
      Light.product-1-icon
        img(src="~assets/images/project/desktop/section4/product1_icon.png")
    .product.swiper-slide
      img.product-image(src="~assets/images/project/mobile/section4/product2.png")
      Shake.product-2-icon
        img(src="~assets/images/project/desktop/section4/product2_icon.png")
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
