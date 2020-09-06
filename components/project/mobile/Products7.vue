<style lang="stylus" scoped>
.products7
  position relative
  width 100%
  &-background
    width 100%
  &-icon2
    position absolute
    left 72%
    bottom 39%
    width width768(187)
  &-icon3
    position absolute
    right 9%
    bottom 14%
    width width768(197)
  &-price0
    position absolute
    left 30%
    top 4%
    width width768(258)
    img
      width 100%
  &-price1
    position absolute
    left 31%
    top 32%
    width width768(259)
    img
      width 100%
  &-price2
    position absolute
    left 27%
    bottom 47%
    width width768(362)
    img
      width 100%
  &-price3
    position absolute
    right 46%
    bottom 20%
    width width768(297)
    img
      width 100%
</style>
<template lang="pug">
.products7
  img.products7-background(src="~assets/images/project/mobile/section7/background.png")
  Shake.products7-price0
    img(src="~assets/images/project/mobile/section7/product0_price.png")
  Shake.products7-price1
    img(src="~assets/images/project/mobile/section7/product1_price.png")
  Shake.products7-price2
    img(src="~assets/images/project/mobile/section7/product2_price.png")
  Shake.products7-price3
    img(src="~assets/images/project/mobile/section7/product3_price.png")
  Light.products7-icon2
    img(src="~assets/images/project/mobile/section7/product2_icon.png")
  Light.products7-icon3
    img(src="~assets/images/project/mobile/section7/product3_icon.png")
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
