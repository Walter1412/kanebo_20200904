<style lang="stylus" scoped>
.products3
  position relative
  &-background
    width 100%
    position relative
  &-head
    position absolute
    width 30%
    right 0%
    top 0%
    width width1920(736)
    img
      width 100%
  &-water
    right auto
    left 0%
    width width1920(430)
    top 4%
  &-icon0
    position absolute
    right 92%
    top 32%
    width width1920(125)
    background-image url('~assets/images/project/desktop/section3/product0_icon.png')
    mask-image url('~assets/images/project/desktop/section3/product0_icon.png')
    img
      width 100%
  &-icon2
    position absolute
    right 31%
    top 36%
    width width1920(125)
    img
      width 100%
</style>
<template lang="pug">
.products3
  Water.products3-water
  img.products3-background(alt="女神推薦專區" src="~assets/images/project/desktop/section3/product.png")
  Move.products3-head
    img(alt="" src="~assets/images/project/desktop/section3/head.png")
  Light.products3-icon0
    img(alt="30%OFF" src="~assets/images/project/desktop/section3/product0_icon.png")
  Shake.products3-icon2
    img(alt="特別推薦" src="~assets/images/project/desktop/section3/product2_icon.png")
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
