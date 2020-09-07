<style lang="stylus" scoped>
.products3
  .product
    position relative
    img
      width 100%
    &-image
      width 100%

    &-0-icon
      position absolute
      left 47%
      top -2%
      width width768(96)
    &-2-icon
      position absolute
      left 71%
      top 6%
      width width768(96)
  .swiper-pagination
    bottom width768(70)
</style>
<template lang="pug">
.products3.swiper-container(ref="products")
  // Additional required wrapper
  .swiper-wrapper
    // Slides
    .product.swiper-slide
      img.product-image(src="~assets/images/project/mobile/section3/product0.png")
      Light.product-0-icon
        img(src="~assets/images/project/mobile/section3/product0_icon.png")
    .product.swiper-slide
      img.product-image(src="~assets/images/project/mobile/section3/product1.png")
    .product.swiper-slide
      img.product-image(src="~assets/images/project/mobile/section3/product2.png")
      Shake.product-2-icon
        img(src="~assets/images/project/mobile/section3/product2_icon.png")
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
