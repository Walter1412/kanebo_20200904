<style lang="stylus" scoped>
.products4
  background-image url('~assets/images/project/desktop/section4/background.png')
  width 100%
  .product
    position relative
    width 100%
    &-image
      width 100%

    &-1-icon
      position absolute
      right 40%
      top 4%
      width width1920(125)
      img
        width 100%
    &-2-icon
      position absolute
      right 63%
      top 0%
      width width1920(120)
      img
        width 100%
</style>
<template lang="pug">
.products4.swiper-container(ref="products")
  // Additional required wrapper
  .swiper-wrapper
    // Slides
    .product.swiper-slide
      img.product-image(src="~assets/images/project/desktop/section4/group0.png")
      Light.product-1-icon
        img(src="~assets/images/project/desktop/section4/product1_icon.png")
    .product.swiper-slide
      img.product-image(src="~assets/images/project/desktop/section4/group1.png")
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
      this.productsSwiper = new Window.Swiper(this.$refs.products, {
        spaceBetween: 30,
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
