<style lang="stylus" scoped>
.products7
  position relative
  width 100%
  &-background
    width 100%
  &-icon2
    position absolute
    left 33%
    bottom 22%
    width width1920(178)
  &-icon3
    position absolute
    right 2%
    bottom 16%
    width width1920(197)
  &-price0
    position absolute
    left 5%
    top 15%
    width width1920(300)
    img
      width 100%
  &-price1
    position absolute
    left 5%
    top 43%
    width width1920(300)
    img
      width 100%
  &-price2
    position absolute
    left 5%
    bottom 26%
    width width1920(420)
    img
      width 100%
  &-price3
    position absolute
    right 31%
    bottom 24%
    width width1920(297)
    img
      width 100%
</style>
<template lang="pug">
.products7
  img.products7-background(src="~assets/images/project/desktop/section7/background.png")
  Shake.products7-price0
    img(src="~assets/images/project/desktop/section7/product0_price.png")
  Shake.products7-price1
    img(src="~assets/images/project/desktop/section7/product1_price.png")
  Shake.products7-price2
    img(src="~assets/images/project/desktop/section7/product2_price.png")
  Shake.products7-price3
    img(src="~assets/images/project/desktop/section7/product3_price.png")
  img.products7-icon2(src="~assets/images/project/desktop/section7/product2_icon.png")
  img.products7-icon3(src="~assets/images/project/desktop/section7/product3_icon.png")
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {}
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {
    this.init()
  },
  methods: {
    init() {},
  },
}
</script>
