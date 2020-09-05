<style lang="stylus">
.desktop
  width 100%
  .section5
    background-image url('~assets/images/project/section5/background.png')
    background-size cover
    background-repeat no-repeat
</style>
<template lang="pug">
.desktop
  Banner0
  Section
    template(slot="title")
      img(src="~assets/images/project/section0/title.png")
    template(slot="content")
      Products0
  Section
    template(slot="title")
      img(src="~assets/images/project/section1/title.png")
    template(slot="content")
      Products1
  Banner1
  Section
    template(slot="title")
      img(src="~assets/images/project/section2/title.png")
    template(slot="content")
      Products2
  Banner2
  Section
    template(slot="content")
      Products3
  Section
    template(slot="title")
      img(src="~assets/images/project/section1/title.png")
    template(slot="content")
      Products4
  Banner3
  Section.section5
    template(slot="title")
      img(src="~assets/images/project/section1/title.png")
    template(slot="content")
      Products5
</template>

<script>
import Banner0 from '@/components/project/desktop/Banner0'
import Banner1 from '@/components/project/desktop/Banner1'
import Banner2 from '@/components/project/desktop/Banner2'
import Banner3 from '@/components/project/desktop/Banner3'
import Products0 from '@/components/project/desktop/Products0'
import Products1 from '@/components/project/desktop/Products1'
import Products2 from '@/components/project/desktop/Products2'
import Products3 from '@/components/project/desktop/Products3'
import Products4 from '@/components/project/desktop/Products4'
import Products5 from '@/components/project/desktop/Products5'
import Section from '@/components/project/desktop/Section'
export default {
  components: {
    Banner0,
    Banner1,
    Banner2,
    Banner3,
    Section,
    Products0,
    Products1,
    Products2,
    Products3,
    Products4,
    Products5,
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
