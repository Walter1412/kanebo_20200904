<style lang="stylus" scoped>
.products6
  position relative
  width 100%
  &-background
    width 100%
  &-icon
    position absolute
    width width1920(246)
    right 5%
    top 0%
  &-product0
    position absolute
    width 100%
    left 0%
    top 20%
  &-product1
    position absolute
    width 100%
    right 0%
    bottom 0%
</style>
<template lang="pug">
.products6
  img.products6-background(src="~assets/images/project/desktop/section6/background.png")
  img.products6-product0(src="~assets/images/project/desktop/section6/product0.png")
  img.products6-product1(src="~assets/images/project/desktop/section6/product1.png")
  img.products6-icon(src="~assets/images/project/desktop/section6/icon.png")
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
