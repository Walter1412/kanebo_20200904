<style lang="stylus">
.products0
  background-image url('~assets/images/project/section0/background.png')
  .product
    position relative
    &-image
      width 100%

    &-2-icon
      position absolute
      left 34%
      top 0%
</style>
<template lang="pug">
.products0.swiper-container(ref="products")
  // Additional required wrapper
  .swiper-wrapper
    // Slides
    .product.swiper-slide
      img.product-image(src="~assets/images/project/section0/group0.png")
    .product.swiper-slide
      img.product-image(src="~assets/images/project/section0/group1.png")
    .product.swiper-slide
      img.product-image(src="~assets/images/project/section0/group2.png")
      img.product-2-icon(src="~assets/images/project/section0/product4_icon.png")
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
