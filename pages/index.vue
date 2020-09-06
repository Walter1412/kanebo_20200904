<style lang="stylus">
.index
  width 100%
</style>
<template lang="pug">
.index
  Desktop
  Mobile
</template>

<script>
import Desktop from '@/components/project/Desktop'
import Mobile from '@/components/project/Mobile'
export default {
  components: {
    Desktop,
    Mobile,
  },
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
