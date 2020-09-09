<style lang="stylus" scoped>
.banner2-wrapper
  width 100%
.banner2-container
  width 100%
.banner2
  position relative
  &-banground
    width 100%
  &-title
    position absolute
    right 0%
    bottom 0%
    width width768(315)
    background-image url('~assets/images/project/mobile/banner2/title.png')
    mask-image url('~assets/images/project/mobile/banner2/title.png')
    img
      width 100%
</style>
<template lang="pug">
.banner2-wrapper
  .banner2-container
    .banner2
      img.banner2-banground(src="~assets/images/project/mobile/banner2/background.jpg")
      Light.banner2-title
        img(src="~assets/images/project/mobile/banner2/title.png")
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
