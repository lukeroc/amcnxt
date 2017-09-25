<template>
  <article class="a-content a-landing-page">
    <div class="a-content-wrapper">

      <!-- WHAT WE DO -->
      <what-we-do
        :isAnimating="isWwdAnimating"
        v-scroll-fire="startAnimation"
        data-animation="isWwdAnimating">
      </what-we-do>

      <!-- MEET AMICO -->
      <meet-amico
        :isAnimating="isMaAnimating"
        v-scroll-fire="startAnimation"
        data-animation="isMaAnimating">
      </meet-amico>

      <!-- AMICO CONNECT -->
      <amico-connect
        :isAnimating="isAcAnimating"
        v-scroll-fire="startAnimation"
        data-animation="isAcAnimating">
      </amico-connect>

      <!-- DOWNLOAD APP -->
      <download-app
        :isAnimating="isDaAnimating"
        v-scroll-fire="startAnimation"
        data-animation="isDaAnimating">
      </download-app>

    </div>
  </article>
</template>

<style lang="scss" src="./index.scss"></style>

<script>
import {
  WhatWeDo,
  MeetAmico,
  AmicoConnect,
  DownloadApp
} from './landing-page'

export default {
  components: {
    WhatWeDo,
    MeetAmico,
    AmicoConnect,
    DownloadApp
  },
  data () {
    return {
      isMobile: true,
      isWwdAnimating: false,
      isMaAnimating: false,
      isAcAnimating: false,
      isDaAnimating: false,
      isBrowserSafe: false,
      currentIndex: -1
    }
  },
  mounted () {
    // CHECK WINDOW WIDTH
    if (window.innerWidth >= 920) {
      this.isMobile = false
    }

    // DISABLE ANIMATIONS ON IE
    var version = this.detectIE()
    if (version !== false) {
      this.disableAnimations()
    }

    // INIT STICKY MENU ON DESKTOP
    if (!this.isMobile) {
      this.initStickyMenu()
    }
  },
  destroyed () {
    this.removeScrollEvent()
    this.removeMenuInlineStyle()
  },
  methods: {
    startAnimation (target) {
      this[target.getAttribute('data-animation')] = true
    },
    disableAnimations () {
      this.isWwdAnimating = true
      this.isMaAnimating = true
      this.isAcAnimating = true
      this.isDaAnimating = true
    },
    detectIE () {
      var ua = window.navigator.userAgent

      var msie = ua.indexOf('MSIE ')
      if (msie > 0) {
        // IE 10 or older => return version number
        return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10)
      }

      var trident = ua.indexOf('Trident/')
      if (trident > 0) {
        // IE 11 => return version number
        var rv = ua.indexOf('rv:')
        return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10)
      }

      var edge = ua.indexOf('Edge/')
      if (edge > 0) {
        // Edge (IE 12+) => return version number
        return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10)
      }

      // other browser
      return false
    },
    initStickyMenu () {
      var stuck = false
      var menu = document.querySelector('.a-menu')
      var stickPoint = menu.offsetTop

      menu.style.position = 'absolute'
      menu.style.bottom = '0'

      window.onscroll = () => {
        console.log('scrolling')

        var distance = menu.offsetTop - window.pageYOffset
        var offset = window.pageYOffset

        if ((distance <= 0) && !stuck) {
          menu.style.position = 'fixed'
          menu.style.top = '0'
          menu.style.bottom = 'auto'
          stuck = true
        } else if (stuck && (offset <= stickPoint)) {
          menu.style.position = 'absolute'
          menu.style.top = 'auto'
          menu.style.bottom = '0'
          stuck = false
        }
      }
    },
    removeScrollEvent () {
      window.onscroll = null
    },
    removeMenuInlineStyle () {
      let menu = document.querySelector('.a-menu')
      menu.removeAttribute('style')
    }
  }
}
</script>
