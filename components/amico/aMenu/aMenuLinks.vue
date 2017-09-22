<template>
  <nav class="a-menu-links">
    <!-- <a @click="setDownloadRoute" class="a-menu-link app-download" href="javascript:void(0);">Download</a> -->
    <router-link @click.native="$emit('closeMobileMenu')" class="a-menu-link" :to="{name: 'careers'}">Careers</router-link>
    <router-link @click.native="$emit('closeMobileMenu')" class="a-menu-link" :to="{name: 'press'}">Press</router-link>
  </nav>
</template>

<style lang="scss">
.app-download {
  font-weight: 400 !important;
}
</style>

<script>
import { scrollToPoint } from '../../../plugins'

export default {
  plugins: [
    scrollToPoint
  ],
  methods: {
    setDownloadRoute () {
      if (this.$route.name !== 'landing-page') {
        this.$router.push({name: 'landing-page'})
        setTimeout(function () {
          scrollToPoint(document.getElementById('downloadApp'), 1000, 'easeOutQuad')
        }, 100)
      } else {
        scrollToPoint(document.getElementById('downloadApp'), 1000, 'easeOutQuad')
      }

      this.$emit('closeMobileMenu')
    }
  }
}
</script>
