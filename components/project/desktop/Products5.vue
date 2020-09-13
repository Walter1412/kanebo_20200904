<style lang="stylus" scoped>
.products5
  width 100%
  background-image url('~assets/images/project/desktop/section5/background0.png')
  background-size contain

  .product
    &-image
      width 100%
</style>
<template lang="pug">
.products5.swiper-container(ref="products")
  // Additional required wrapper
  .swiper-wrapper
    // Slides
    .product.swiper-slide
      img.product-image(alt="LUNASOL 超模速成款 LUNASOL 超人氣熱銷款" src="~assets/images/project/desktop/section5/group0.png")
    .product.swiper-slide
      img.product-image(alt="KANEBO 名媛顏值肌 COFFRET DOR 最夯美顏款" src="~assets/images/project/desktop/section5/group1.png")
    .product.swiper-slide
      img.product-image(alt="COFFRET DOR 秒殺夯物款 COFFRET DOR 底妝聚光款" src="~assets/images/project/desktop/section5/group2.png")

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
