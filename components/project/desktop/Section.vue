<style lang="stylus" scoped>
.section0-wrapper
  width 100%
  padding-top 70px
.section0-container
  width 100%
.section0
  &-title
    width 100%
    padding-right width1920(115)
    padding-left width1920(115)
    padding-bottom width1920(80)

    img
      width 100%
</style>
<template lang="pug">
.section0-wrapper
  .section0-container
    .section0
      .section0-title
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
