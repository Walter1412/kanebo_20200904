<style lang="stylus" scoped>
.products6
  position relative
  width 100%
  padding-top width768(60)
  padding-bottom 0
  &-water
    top 2%
    right 62%
  &-title
    position absolute
    top 2%
    left 0%
    width 100%
  &-background
    width 100%

  &-icon
    position absolute
    width width768(152)
    right 2%
    top 3%
    background-image url('~assets/images/project/mobile/section6/icon.png')
    mask-image url('~assets/images/project/mobile/section6/icon.png')
    img
      width 100%
  &-product0
    position absolute
    width 100%
    left 0%
    top 12%
    img
      width 100%
  &-product1
    position absolute
    width 100%
    right 0%
    bottom 6%
    img
      width 100%
</style>
<template lang="pug">
.products6.swiper-container(ref="products")
  img.products6-background(alt="" src="~assets/images/project/mobile/section6/background.png")
  Water.products6-water
  img.products6-title(alt="專屬加贈禮" src="~assets/images/project/mobile/section6/title.png")
  Left.products6-product0
    img(alt="萃齡保濕加贈禮" src="~assets/images/project/mobile/section6/product0.png")
  Move.products6-product1
    img(alt="潤活極致加贈禮" src="~assets/images/project/mobile/section6/product1.png")
  Light.products6-icon
    img(alt="" src="~assets/images/project/mobile/section6/icon.png")

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
