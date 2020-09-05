<style lang="stylus">
.products1
  background-image url('~assets/images/project/section1/background.png')
  .product
    position relative
    &-image
      width 100%

    &-0-icon
      position absolute
      left 25%
      top 0%
      width width1920(264)
    &-1-icon
      position absolute
      left 72%
      top 0%
      width width1920(264)

    &-4-icon
      position absolute
      right 79%
      top 0%
      width width1920(125)
      img
        width 100%
    &-5-icon
      position absolute
      left 84%
      top 20%
      width width1920(125)

      img
        width 100%
</style>
<template lang="pug">
.products1.swiper-container(ref="products")
  // Additional required wrapper
  .swiper-wrapper
    // Slides
    .product.swiper-slide
      img.product-image(src="~assets/images/project/section1/group0.png")
      img.product-0-icon(src="~assets/images/project/section1/product0_icon.png")
      img.product-1-icon(src="~assets/images/project/section1/product1_icon.png")
    .product.swiper-slide
      img.product-image(src="~assets/images/project/section1/group1.png")
    .product.swiper-slide
      img.product-image(src="~assets/images/project/section1/group2.png")
      Shake.product-4-icon
        img(src="~assets/images/project/section1/product4_icon.png")
      Shake.product-5-icon
        img(src="~assets/images/project/section1/product5_icon.png")

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
