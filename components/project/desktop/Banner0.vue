<style lang="stylus" scoped>
.banner0-wrapper
  width 100%
.banner0-container
  width 100%
.banner0
  position relative
  &-banground
    width 100%
  &-title
    position absolute
    left 26%
    bottom 18%
    width width1920(518)
    background-image url('~assets/images/project/desktop/banner0/title.png')
    mask-image url('~assets/images/project/desktop/banner0/title.png')

    img
      width 100%
</style>
<template lang="pug">
.banner0-wrapper
  .banner0-container
    .banner0
      img.banner0-banground(alt="KANEBO極致好禮 美麗燦爛一整年" src="~assets/images/project/desktop/banner0/background.jpg")
      Light.banner0-title
        img(alt="" src="~assets/images/project/desktop/banner0/title.png")
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
