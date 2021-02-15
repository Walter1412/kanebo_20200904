<style lang="stylus" scoped>
.products0
  background-image url('~assets/images/project/desktop/section0/background.png')
  position relative
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
  Halo
  .swiper-wrapper
    // Slides
    .product.swiper-slide
      img.product-image(alt="KANEBO 透亮煥顏組 KANEBO 肌活提拉組" src="~assets/images/project/desktop/section0/group0.png")
    .product.swiper-slide
      img.product-image(alt="KANEBO 機能修護組 KANEBO 瞬亮嫩白組" src="~assets/images/project/desktop/section0/group1.png")
    .product.swiper-slide
      img.product-image(alt="特別推薦 KANEBO肌活緊顏組" src="~assets/images/project/desktop/section0/group2.png")
      Shake.product-2-icon
        img(alt="" src="~assets/images/project/desktop/section0/product4_icon.png")
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
