<style lang="stylus">
.products2
  background-image url('~assets/images/project/section0/background.png')
  .product
    position relative
    &-image
      width 100%

    &-0-icon
      position absolute
      left 4%
      top 0%
    &-2-icon
      position absolute
      left 7%
      top 0%
    &-3-icon
      position absolute
      right 8%
      top 0%
</style>
<template lang="pug">
.products2.swiper-container(ref="products")
  // Additional required wrapper
  .swiper-wrapper
    // Slides
    .product.swiper-slide
      img.product-image(src="~assets/images/project/section2/group0.png")
      img.product-0-icon(src="~assets/images/project/section2/product0_icon.png")
    .product.swiper-slide
      img.product-image(src="~assets/images/project/section2/group1.png")
      img.product-2-icon(src="~assets/images/project/section2/product2_icon.png")
      img.product-3-icon(src="~assets/images/project/section2/product3_icon.png")
    .product.swiper-slide
      img.product-image(src="~assets/images/project/section2/group2.png")

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
