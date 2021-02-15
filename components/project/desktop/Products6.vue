<style lang="stylus" scoped>
.products6
  position relative
  width 100%
  &-water
    top 0%
    left 1%
  &-title
    width 100%
    position absolute
    top 0%
    left 0%
    transform translateX(-8%)
  &-background
    width 100%
    position relative
  &-icon
    position absolute
    width width1920(246)
    right 5%
    top 0%
    background-image url('~assets/images/project/desktop/section6/icon.png')
    mask-image url('~assets/images/project/desktop/section6/icon.png')
    img
      width 100%
  &-product0
    position absolute
    width 100%
    left 0%
    top 20%
    img
      width 100%
  &-product1
    position absolute
    width 100%
    right 0%
    bottom 0%
    img
      width 100%
</style>
<template lang="pug">
.products6
  img.products6-background(alt="" src="~assets/images/project/desktop/section6/background.png")
  Water.products6-water
  img.products6-title(alt="專屬加贈禮" src="~assets/images/project/desktop/section6/title.png")
  Left.products6-product0
    img(alt="萃齡保濕加贈禮" src="~assets/images/project/desktop/section6/product0.png")
  Move.products6-product1
    img(alt="潤活極致加贈禮" src="~assets/images/project/desktop/section6/product1.png")
  Light.products6-icon
    img(alt="" src="~assets/images/project/desktop/section6/icon.png")
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
