<style lang="stylus" scoped>
.banner0-wrapper
  width 100%
  heith 1024px
.banner0-container
  width 100%
  height 100%
.banner0
  height 100%
  position relative
  &-banground
    height 100%
    width 100%
  &-title
    position absolute
    width 98%
    left 0%
    bottom 0%
    img
      width 100%
</style>
<template lang="pug">
.banner0-wrapper
  .banner0-container
    .banner0
      img.banner0-banground(src="~assets/images/project/mobile/banner0/background.png")
      Light.banner0-title
        img(src="~assets/images/project/mobile/banner0/title.png")
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
