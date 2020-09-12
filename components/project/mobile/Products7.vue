<style lang="stylus" scoped>
.products7
  position relative
  width 100%
  &-water
    top 0.3%
    right 49%
  &-title
    position absolute
    width 100%
    top 0%
    left 0%
  &-background
    width 100%
  &-icon2
    position absolute
    left 72%
    bottom 39%
    width width768(187)
    background-image url('~assets/images/project/mobile/section7/product2_icon.png')
    mask-image url('~assets/images/project/mobile/section7/product2_icon.png')
    img
      width 100%
  &-icon3
    position absolute
    right 9%
    bottom 14%
    width width768(197)
    background-image url('~assets/images/project/mobile/section7/product3_icon.png')
    mask-image url('~assets/images/project/mobile/section7/product3_icon.png')
    img
      width 100%
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
    width width768(260)
    img
      width 100%
</style>
<template lang="pug">
.products7
  img.products7-background(src="~assets/images/project/mobile/section7/background.png")
  Water.products7-water
  img.products7-title(src="~assets/images/project/mobile/section7/title.png")
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
