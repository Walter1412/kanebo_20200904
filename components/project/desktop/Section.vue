<style lang="stylus">
.section0-wrapper
  with 100%
  padding-top 70px
.section0-container
  width 100%
.section0
  &-title
    width 100%
    padding-right 155px
    padding-left 155px
    padding-bottom 120px

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
