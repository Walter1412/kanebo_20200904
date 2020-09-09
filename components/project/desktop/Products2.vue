<style lang="stylus" scoped>
.products2
  background-image url('~assets/images/project/desktop/section2/background.png')
  .product
    position relative
    &-image
      width 100%

    &-0-icon
      position absolute
      right 84%
      top 0%
      width width1920(125)
      img
        width 100%
    &-2-icon
      position absolute
      right 81%
      top 0%
      width width1920(125)
      img
        width 100%
    &-3-icon
      position absolute
      left 80%
      top 6%
      width width1920(125)
      img
        width 100%
</style>
<template lang="pug">
.products2.swiper-container(ref="products")
  // Additional required wrapper
  .swiper-wrapper
    // Slides
    .product.swiper-slide
      img.product-image(src="~assets/images/project/desktop/section2/group0.png")
      Shake.product-0-icon
        img(src="~assets/images/project/desktop/section2/product0_icon.png")
    .product.swiper-slide
      img.product-image(src="~assets/images/project/desktop/section2/group1.png")
      Shake.product-2-icon
        img(src="~assets/images/project/desktop/section2/product2_icon.png")
      Shake.product-3-icon
        img(src="~assets/images/project/desktop/section2/product3_icon.png")
    .product.swiper-slide
      img.product-image(src="~assets/images/project/desktop/section2/group2.png")
    .product.swiper-slide
      img.product-image(src="~assets/images/project/desktop/section2/group3.png")

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
