<style lang="stylus">
.desktop
  width 100%
  .section5
    background-image url('~assets/images/project/section5/background.png')
    background-size cover
    background-position center center
    background-repeat no-repeat
    padding-top 0
</style>
<template lang="pug">
.desktop
  Banner0
  //- 緊緻精華特區
  Section
    template(slot="title")
      img(src="~assets/images/project/section0/title.png")
    template(slot="content")
      Products0
  //- 年度回饋
  Section
    template(slot="title")
      img(src="~assets/images/project/section1/title.png")
    template(slot="content")
      Products1
  UserSection
    template(slot="title")
      img(src="~assets/images/project/users0/title.png")
    template(slot="content")
      User0
  Banner1
  //- 雙重保濕
  Section
    template(slot="title")
      img(src="~assets/images/project/section2/title.png")
    template(slot="content")
      Products2
  //- 女神推
  Section
    template(slot="content")
      Products3
  Banner2
  //- 潔淨特優專區
  Section
    template(slot="title")
      img(src="~assets/images/project/section4/title.png")
    template(slot="content")
      Products4
  UserSection
    template(slot="title")
      img(src="~assets/images/project/users1/title.png")
    template(slot="content")
      User1
  Banner3
  //- 彩妝超夯好物
  Section.section5
    template(slot="title")
      img(src="~assets/images/project/section5/title.png")
    template(slot="content")
      Products5
  Products6
  Products7
  Footer
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
import Products6 from '@/components/project/desktop/Products6'
import Products7 from '@/components/project/desktop/Products7'
import User0 from '@/components/project/desktop/User0'
import User1 from '@/components/project/desktop/User1'
import Section from '@/components/project/desktop/Section'
import UserSection from '@/components/project/desktop/UserSection'
import Footer from '@/components/project/desktop/Footer'
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
    Products6,
    Products7,
    User0,
    User1,
    UserSection,
    Footer,
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
