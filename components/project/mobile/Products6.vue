<style lang="stylus" scoped>
.products6
  position relative
  width 100%
  padding-top width768(60)
  &-background
    width 100%
  &-icon
    position absolute
    width width768(152)
    right 2%
    top 0%
    img
      width 100%
  &-product0
    position absolute
    width 100%
    left 0%
    top 9%
  &-product1
    position absolute
    width 100%
    right 0%
    bottom 11%
</style>
<template lang="pug">
.products0.swiper-container(ref="products")
  img.products6-background(src="~assets/images/project/mobile/section6/background.png")
  img.products6-product0(src="~assets/images/project/mobile/section6/product0.png")
  img.products6-product1(src="~assets/images/project/mobile/section6/product1.png")
  Light.products6-icon
    img(src="~assets/images/project/mobile/section6/icon.png")

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
