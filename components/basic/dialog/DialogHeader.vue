<style lang="stylus">
.dialog-header
  display flex
  height 60px
  width 100%
  padding 18px 25px
  color rgba(0, 0, 0, 0.65)
  font-weight 600
  font-size rem(18px)
  border-bottom 1px solid #ecf1f6
  justify-content space-between
</style>
<template lang="pug">
.dialog-header
  slot

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
  methods: {},
}
</script>
