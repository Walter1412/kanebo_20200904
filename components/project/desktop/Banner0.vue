<style lang="stylus">
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
</style>
<template lang="pug">
.banner0-wrapper
  .banner0-container
    .banner0
      img.banner0-banground(src="~assets/images/project/banner0/background.jpg")
      img.banner0-title(src="~assets/images/project/banner0/title.png")
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
