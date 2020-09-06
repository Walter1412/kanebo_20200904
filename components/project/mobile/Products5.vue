<style lang="stylus" scoped>
.products5
  background-image url('~assets/images/project/mobile/section5/background.png')
  background-size cover
  position relative
  padding-top width768(50)
  &-water
    top 4%
  &-title
    padding-bottom width768(50)
  .product
    position relative
    img
      width 100%
    &-image
      width 100%
</style>
<template lang="pug">
.products5
  .products5-title
    Water.products5-water
    img(src="~assets/images/project/mobile/section5/title.png")
  .swiper-container(ref="products")
    // Additional required wrapper
    .swiper-wrapper
      // Slides
      .product.swiper-slide
        img.product-image(src="~assets/images/project/mobile/section5/product0.png")
      .product.swiper-slide
        img.product-image(src="~assets/images/project/mobile/section5/product1.png")
      .product.swiper-slide
        img.product-image(src="~assets/images/project/mobile/section5/product2.png")
      .product.swiper-slide
        img.product-image(src="~assets/images/project/mobile/section5/product3.png")
      .product.swiper-slide
        img.product-image(src="~assets/images/project/mobile/section5/product4.png")
      .product.swiper-slide
        img.product-image(src="~assets/images/project/mobile/section5/product5.png")
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
