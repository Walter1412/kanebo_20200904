<style lang="stylus" scoped>
.products2
  background-image url('~assets/images/project/mobile/section2/background.png')
  position relative
  .product
    position relative
    height
    .product-6
      transform translateY(21%)
    img
      width 100%
    &-image
      width 100%

    &-0-icon
      position absolute
      right 75%
      top 9%
      width width768(96)
    &-2-icon
      position absolute
      right 74%
      top 10%
      width width768(96)

    &-3-icon
      position absolute
      left 59%
      top 14%
      width width768(96)
</style>
<template lang="pug">
.products2.swiper-container(ref="products")
  // Additional required wrapper
  Halo
  .swiper-wrapper
    // Slides
    .product.swiper-slide
      img.product-image(alt="DEW SUPERIOR 鎖水潤活組" src="~assets/images/project/mobile/section2/product0.png")
      Shake.product-0-icon
        img(alt="" src="~assets/images/project/mobile/section2/product0_icon.png")
    .product.swiper-slide
      img.product-image(alt="DEW SUPERIOR 飽水潤活組" src="~assets/images/project/mobile/section2/product1.png")
    .product.swiper-slide
      img.product-image(alt="KANEBO 肌活潤彈組" src="~assets/images/project/mobile/section2/product2.png")
      Shake.product-2-icon
    .product.swiper-slide
      img.product-image(alt="KANEBO 肌活沆痕組" src="~assets/images/project/mobile/section2/product3.png")
      Shake.product-3-icon
        img(alt="" src="~assets/images/project/mobile/section2/product3_icon.png")
    .product.swiper-slide
      img.product-image(alt="KANEBO 奢華潤彈組" src="~assets/images/project/mobile/section2/product4.png")
    .product.swiper-slide
      img.product-image(alt="KANEBO 奢潤發光肌" src="~assets/images/project/mobile/section2/product5.png")
    .product.swiper-slide
      img.product-6.product-image(alt="DEW SUPERIOR EX 活顏超有感" src="~assets/images/project/mobile/section2/product6.png")
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
