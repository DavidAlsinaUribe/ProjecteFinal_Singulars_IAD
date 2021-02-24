function setup() {
    return {
      isHovering: false,
      x: '',
      y: '',
      handleMouseMove(e, el) {
        this.x = (e.pageX - el.offsetLeft - el.offsetWidth / 2) / el.offsetWidth
        this.y = (e.pageY - el.offsetTop - el.offsetHeight / 2) / el.offsetHeight
        el.style.transform = `rotateY(${this.x * 30}deg) rotateX(${this.y * -30}deg)`
      },
      handleMouseLeave(e, el) {
        el.style.transition = 'all .5s ease'
        el.style.transform = `rotateY(0deg) rotateX(0deg)`
        this.x = 0
        this.y = 0
        this.isHovering = false
      },
      handleMouseEnter(e, el) {
        el.style.transition = 'none'
        this.isHovering = true
      },
      cardBgTransform(e, el) {
        el.style.transform = `translateX(${this.x * 20}px) translateY(${this.y * 20}px)`
      },
    }
  }