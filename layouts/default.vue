<style lang="stylus" scoped></style>
<template lang="pug">
.default-wrapper
  .default-container
    main.defult
      Nuxt

  transition(name="page")
    Dialog(v-if="isDialogDisplay")
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  components: {},
  props: {},
  data() {
    return {}
  },
  computed: {
    ...mapGetters({
      dialogComponentName: 'dialog/componentName',
      isDialogDisplay: 'dialog/isDisplay',
    }),
  },
  watch: {
    dialogComponentName(newValue) {
      if (this.isValid(newValue)) {
        this.setDialogDisplay(true)
      } else {
        this.setDialogDisplay(false)
      }
    },
  },
  created() {},
  mounted() {},
  methods: {
    ...mapActions({
      setDialogDisplay: 'dialog/setDiaplay',
    }),
  },
}
</script>
