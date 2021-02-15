// const EventEmitter = require('events')
// class ListenWindow extends EventEmitter {
//   constructor(props, context) {
//     super()
//     this.width = null
//     this.height = null

//     window.addEventListener('resize', (event) => {
//       this.height = event.target.innerHeight
//       this.width = event.target.innerWidth
//       this.emit('resize', { height: this.height, width: this.width })
//     })

//     window.addEventListener('scroll', (event) => {
//       const scrollTop = window.pageYOffset
//       this.emit('scroll', { scrollTop })
//     })

//     window.document.addEventListener('click', (event) => {
//       this.emit('click', event)
//     })

//     window.onload = (event) => {
//       const content = document.querySelector('.kanebo')
//       if (content) {
//         content.addEventListener('scroll', (event) => {
//           const { scrollTop } = event.target
//           this.emit('scroll', { scrollTop })
//         })
//         this.init()
//       }
//     }
//   }

//   init() {
//     this.triggerResize()
//     this.triggerScroll()
//   }

//   getWindowHeight() {
//     return this.height
//   }

//   getWindowWidth() {
//     return this.width
//   }

//   triggerScroll() {
//     const onScroll = new Event('scroll')
//     window.dispatchEvent(onScroll)
//   }

//   triggerResize() {
//     const onResize = new Event('resize')
//     window.dispatchEvent(onResize)
//   }
// }

// export default ListenWindow

const EventEmitter = require('events').EventEmitter

class ListenWindow extends EventEmitter {
  constructor() {
    super()

    this.$window = $(window)
    this.windowWidth = this.$window.width()
    this.windowHeight = this.$window.height()
    this.scrollTop = null
    this.isOpenMenu = false

    this.$window.resize(() => {
      this.onResize()
    })
    this.$window.scroll(() => {
      this.onScroll()
    })
  }

  onResize() {
    this.windowWidth = this.$window.width()
    this.windowHeight = this.$window.height()
    // console.log(this.windowWidth, this.windowHeight);
    this.emit('resize', { width: this.windowWidth, height: this.windowHeight })
  }

  onScroll() {
    this.scrollTop = $(window).scrollTop()
    this.emit('scroll', { scrollTop: this.scrollTop })
  }
}
export default ListenWindow
