<style lang="stylus" scoped>
.section3
  &-water
    top 36%
  &-head
    position absolute
    right 0%
    top 0%
    width width768(330) !important
.section5
  padding-top 0
</style>
<template lang="pug">
.mobile
  MobileBanner0
  MobileSection
    template(slot="title")
      Water
      img(src="~assets/images/project/mobile/section0/title.png")
    template(slot="content")
      MobileProducts0
  MobileSection
    template(slot="title")
      Water
      img(src="~assets/images/project/mobile/section1/title.png")
    template(slot="content")
      MobileProducts1
  MobileBanner1
  MobileSection
    template(slot="title")
      Water
      img(src="~assets/images/project/mobile/section2/title.png")
    template(slot="content")
      MobileProducts2
  MobileSection
    template(slot="title")
      Water.section3-water
      img(src="~assets/images/project/mobile/section3/title.png")
      img.section3-head(src="~assets/images/project/mobile/section3/head.png")
    template(slot="content")
      MobileProducts3
  MobileBanner2
  MobileSection
    template(slot="title")
      Water
      img(src="~assets/images/project/mobile/section4/title.png")
    template(slot="content")
      MobileProducts4
  MobileBanner3
  MobileProducts5
  MobileProducts6
  MobileSection
    template(slot="content")
      MobileProducts7

</template>

<script>
import MobileBanner0 from '@/components/project/mobile/Banner0'
import MobileBanner1 from '@/components/project/mobile/Banner1'
import MobileBanner2 from '@/components/project/mobile/Banner2'
import MobileBanner3 from '@/components/project/mobile/Banner3'
import MobileSection from '@/components/project/mobile/Section'
import MobileProducts0 from '@/components/project/mobile/Products0'
import MobileProducts1 from '@/components/project/mobile/Products1'
import MobileProducts2 from '@/components/project/mobile/Products2'
import MobileProducts3 from '@/components/project/mobile/Products3'
import MobileProducts4 from '@/components/project/mobile/Products4'
import MobileProducts5 from '@/components/project/mobile/Products5'
import MobileProducts6 from '@/components/project/mobile/Products6'
import MobileProducts7 from '@/components/project/mobile/Products7'
export default {
  components: {
    MobileBanner0,
    MobileBanner1,
    MobileBanner2,
    MobileBanner3,
    MobileSection,
    MobileProducts0,
    MobileProducts1,
    MobileProducts2,
    MobileProducts3,
    MobileProducts4,
    MobileProducts5,
    MobileProducts6,
    MobileProducts7,
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
