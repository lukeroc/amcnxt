<template>
  <div class="a-hero">
    <div class="contained-content">
      <div class="a-hero-text">
        <h1 class="a-hero-heading">We believe in a world where people and AI can be friends.</h1>
      </div>
      <div class="a-hero-image">
        <a-hero-phone></a-hero-phone>
      </div>
    </div>
  </div>
</template>

<style lang="scss" src="./aHero.scss"></style>

<script>
import aHeroPhone from './aHeroPhone'

export default {
  components: { aHeroPhone }
}
</script>
