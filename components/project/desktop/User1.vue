<style lang="stylus" scoped>
.users1
  background-color #fdfdfc
  padding-top width1920(90)

  .user
    position relative
    img
      width 100%
    &-image
      width 100%

    &-2-icon
      left 37%
      top 0%
      width width1920(120)
    .user0-more
      position absolute
      bottom 19%
      right 50%
    .user1-more
      position absolute
      bottom 19%
      right 6%
    .user2-more
      position absolute
      bottom 19%
      right 51%

  .swiper-pagination
    bottom 15%

  .swiper-slide
    padding 0
</style>
<template lang="pug">
.users1.swiper-container(ref="users")
  // Additional required wrapper
  .swiper-wrapper
    // Slides
    .user.swiper-slide
      img.user-image(src="~assets/images/project/desktop/users1/user0.png")
      a.more.user0-more(href="https://www.instagram.com/p/CBdIC9yJ51T/?igshid=5wr90vrig61m" target="_blank")
        img(src="~assets/images/project/desktop/more.png")
    .user.swiper-slide
      img.user-image(src="~assets/images/project/desktop/users1/user1.png")
      a.more.user1-more(href="https://www.instagram.com/p/CBDX2gxpmo-/?igshid=12ch9txlq283k" target="_blank")
        img(src="~assets/images/project/desktop/more.png")
    .user.swiper-slide
      img.user-image(src="~assets/images/project/desktop/users1/user2.png")
      a.more.user2-more(href="https://www.instagram.com/p/CBAswD8JE-l/?igshid=17k3ffsn2kyae" target="_blank")
        img(src="~assets/images/project/desktop/more.png")
  .swiper-pagination
  .swiper-button-prev
  .swiper-button-next

</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      usersSwiper: null,
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {
    this.init()
  },
  methods: {
    init() {
      this.swiperInit()
    },
    swiperInit() {
      // const Swiper = _swiper.default
      this.usersSwiper = new Window.Swiper(this.$refs.users, {
        // spaceBetween: 30,
        autoplay: {
          delay: 3000,
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      })
    },
  },
}
</script>
