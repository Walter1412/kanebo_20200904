<style lang="stylus" scoped>
.users0
  background-color #f5eeed
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
      bottom 26%
      right 9%
    .user1-more
      position absolute
      bottom 19%
      right 46%
    .user2-more
      position absolute
      bottom 26%
      right 13%

  .swiper-pagination
    bottom 20%

  .swiper-slide
    padding 0
</style>
<template lang="pug">
.users0.swiper-container(ref="users")
  // Additional required wrapper
  .swiper-wrapper
    // Slides
    .user.swiper-slide
      img.user-image(src="~assets/images/project/desktop/users0/user0.png")
      a.more.user0-more(href="https://nataliepink.pixnet.net/blog/post/68865343" target="_blank")
        img(src="~assets/images/project/desktop/more.png")
    .user.swiper-slide
      img.user-image(src="~assets/images/project/desktop/users0/user1.png")
      a.more.user1-more(href="https://bit.ly/3emQjqU" target="_blank")
        img(src="~assets/images/project/desktop/more.png")
    .user.swiper-slide
      img.user-image(src="~assets/images/project/desktop/users0/user2.png")
      a.more.user2-more(href="https://bit.ly/3cxQsGk" target="_blank")
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
