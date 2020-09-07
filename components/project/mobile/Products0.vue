<style lang="stylus" scoped>
.products0
  background-image url('~assets/images/project/mobile/section0/background.png')
  .product
    position relative
    img
      width 100%
    &-image
      width 100%

    &-4-icon
      position absolute
      right 61%
      top 4%
      width width768(96)
</style>
<template lang="pug">
.products0.swiper-container(ref="products")
  // Additional required wrapper
  .swiper-wrapper
    // Slides
    .product.swiper-slide
      img.product-image(src="~assets/images/project/mobile/section0/product0.png")
    .product.swiper-slide
      img.product-image(src="~assets/images/project/mobile/section0/product1.png")
    .product.swiper-slide
      img.product-image(src="~assets/images/project/mobile/section0/product2.png")
    .product.swiper-slide
      img.product-image(src="~assets/images/project/mobile/section0/product3.png")
    .product.swiper-slide
      img.product-image(src="~assets/images/project/mobile/section0/product4.png")
      Shake.product-4-icon
        img(src="~assets/images/project/mobile/section0/product4_icon.png")
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
