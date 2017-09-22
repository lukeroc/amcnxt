<template>
  <header class="a-header">
    <div class="a-menu">
      <div class="content contained-content">

        <!-- LOGO -->
        <div class="a-logo">
          <nuxt-link to="/">
            <img src="~/static/images/logo-primary.svg" alt="amico.ai logo">
          </nuxt-link>
        </div>

        <!-- DESKTOP MENU LINKS -->
        <nav v-if="!isMobile" class="a-menu-links">
          <!-- <a @click="setDownloadRoute" class="a-menu-link app-download" href="javascript:void(0);">Download</a> -->

          <nuxt-link
            class="a-menu-link"
            :to="{name: 'careers'}">
              Careers
          </nuxt-link>

          <nuxt-link
            class="a-menu-link"
            :to="{name: 'press'}">
              Press
          </nuxt-link>

          <nuxt-link
            class="a-menu-link"
            :to="{name: 'blog'}">
              Blog
          </nuxt-link>
        </nav>

        <!-- BURGER BUTTON -->
        <a
          :class="{'a-mobile-menu-visible': isMobileMenuVisible}"
          @click="isMobileMenuVisible = !isMobileMenuVisible"
          class="a-burger">
            <span class="a-burger-bar"></span>
            <span class="a-burger-bar"></span>
            <span class="a-burger-bar"></span>
        </a>
      </div>

      <!-- MOBILE MENU LINKS -->
      <transition name="slide-in-down">
        <div
          v-if="isMobile && isMobileMenuVisible"
          class="a-menu-dropdown">
            <nav class="a-menu-links">
              <!-- <a @click="setDownloadRoute" class="a-menu-link app-download" href="javascript:void(0);">Download</a> -->

              <nuxt-link
                class="a-menu-link"
                :to="{name: 'careers'}"
                @click.native="isMobileMenuVisible = false">
                  Careers
              </nuxt-link>

              <nuxt-link
                class="a-menu-link"
                :to="{name: 'press'}"
                @click.native="isMobileMenuVisible = false">
                  Press
              </nuxt-link>

              <nuxt-link
                class="a-menu-link"
                :to="{name: 'blog'}"
                @click.native="isMobileMenuVisible = false">
                  Blog
              </nuxt-link>
            </nav>
        </div>
      </transition>
    </div>
  </header>
</template>

<style lang="scss" src="./aHeader.scss"></style>

<script>
export default {
  data () {
    return {
      isMobile: true,
      isMobileMenuVisible: false
    }
  },
  mounted () {
    if (window.innerWidth >= 920) {
      this.isMobile = false
    }
  }
}
</script>
