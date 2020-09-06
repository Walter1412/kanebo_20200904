<style lang="stylus" scoped>
.banner1-wrapper
  width 100%
.banner1-container
  width 100%
.banner1
  position relative
  &-banground
    width 100%
  &-title
    position absolute
    left 30%
    bottom 40%
    width width1920(207)
    img
      width 100%
  &-product
    position absolute
    left 47%
    bottom 8%
    width width1920(189)
    img
      width 100%
</style>
<template lang="pug">
.banner1-wrapper
  .banner1-container
    .banner1
      img.banner1-banground(src="~assets/images/project/desktop/banner1/background.jpg")
      Shake.banner1-title
        img(src="~assets/images/project/desktop/banner1/title.png")
      Light.banner1-product
        img(src="~assets/images/project/desktop/banner1/product.png")
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
  mounted() {},
  // methods: {},
}
</script>
