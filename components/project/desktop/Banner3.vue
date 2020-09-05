<style lang="stylus">
.banner3-wrapper
  width 100%
.banner3-container
  width 100%
.banner3
  position relative
  &-banground
    width 100%
  &-title
    position absolute
    left 50%
    transform translate(-50%,0)
    bottom 3%
</style>
<template lang="pug">
.banner3-wrapper
  .banner3-container
    .banner3
      img.banner3-banground(src="~assets/images/project/banner3/background.jpg")
      img.banner3-title(src="~assets/images/project/banner3/title.png")
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
