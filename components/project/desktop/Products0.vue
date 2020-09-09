<style lang="stylus" scoped>
.products0
  background-image url('~assets/images/project/desktop/section0/background.png')
  .product
    position relative
    img
      width 100%
    &-image
      width 100%

    &-2-icon
      position absolute
      right 56%
      top 0%
      width width1920(120)
</style>
<template lang="pug">
.products0.swiper-container(ref="products")
  // Additional required wrapper
  .swiper-wrapper
    // Slides
    .product.swiper-slide
      img.product-image(src="~assets/images/project/desktop/section0/group0.png")
    .product.swiper-slide
      img.product-image(src="~assets/images/project/desktop/section0/group1.png")
    .product.swiper-slide
      img.product-image(src="~assets/images/project/desktop/section0/group2.png")
      Shake.product-2-icon
        img(src="~assets/images/project/desktop/section0/product4_icon.png")
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
