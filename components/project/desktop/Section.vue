<style lang="stylus" scoped>
.section-wrapper
  width 100%
  padding-top width1920(70)
.section-container
  width 100%
.section
  &-title
    position relative
    width 100%
    padding-bottom width1920(80)

    img
      width 100%
      position relative
</style>
<template lang="pug">
.section-wrapper
  .section-container
    .section
      .section-title
        slot(name="title")
      slot(name="content")

</template>

<script>
export default {
  props: {},
  data() {
    return {}
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {},
}
</script>
