<style lang="stylus" scoped>
@keyframes move
  from
    transform translate(0,0)
  to
    transform translate(0,8px)
.shake
  animation-name move
  animation-duration 1s
  animation-direction alternate
  animation-iteration-count: infinite
</style>
<template lang="pug">
.shake
  slot

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
  // methods: {},
}
</script>
