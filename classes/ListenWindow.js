const EventEmitter = require('events')
class ListenWindow extends EventEmitter {
  constructor(props, context) {
    super()
    this.width = null
    this.height = null

    window.addEventListener('resize', (event) => {
      this.height = event.target.innerHeight
      this.width = event.target.innerWidth
      this.emit('resize', { height: this.height, width: this.width })
    })

    window.addEventListener('scroll', (event) => {
      const scrollTop = window.pageYOffset
      this.emit('scroll', { scrollTop })
    })

    window.document.addEventListener('click', (event) => {
      this.emit('click', event)
    })

    window.onload = (event) => {
      const content = document.querySelector('.genting-content')
      if (content) {
        content.addEventListener('scroll', (event) => {
          const { scrollTop } = event.target
          this.emit('scroll', { scrollTop })
        })
        this.init()
      }
    }
  }

  init() {
    this.triggerResize()
    this.triggerScroll()
  }

  getWindowHeight() {
    return this.height
  }

  getWindowWidth() {
    return this.width
  }

  triggerScroll() {
    const onScroll = new Event('scroll')
    window.dispatchEvent(onScroll)
  }

  triggerResize() {
    const onResize = new Event('resize')
    window.dispatchEvent(onResize)
  }
}

export default ListenWindow
