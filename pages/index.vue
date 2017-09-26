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
import { isIE } from '~/plugins'

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
  plugins: [
    isIE
  ],
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

    // INIT STICKY MENU ON DESKTOP
    if (!this.isMobile) {
      this.initStickyMenu()
    }

    // DISABLE ANIMATIONS ON IE
    if (isIE()) {
      this.disableAnimations()
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
    initStickyMenu () {
      var stuck = false
      var menu = document.querySelector('.a-menu')
      var stickPoint = menu.offsetTop

      menu.style.position = 'absolute'
      menu.style.bottom = '0'

      window.onscroll = () => {
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
