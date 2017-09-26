<template>
  <section class="a-unsupported-browser">
    <div class="content">
      <div class="contained-content">
        <div class="a-logo">
          <nuxt-link to="/">
            <img src="~/static/images/logo-secondary.svg" alt="amico.ai logo">
          </nuxt-link>
        </div>
        <div class="a-unsupported-content">
          <div class="a-image-content">
            <div class="a-amico-sad">
              <img alt="Sad Amico illustration" src="~/static/images/browser-support-amico-sad.svg">
            </div>
          </div>
          <div class="a-text-content">
            <h1 class="a-title">
              oh no… <br>
              you are using an outdated browser!
            </h1>
            <p class="a-message">
              Using an outdated browser makes your computer unsafe.
              Click on a browser icon below to start
              downloading the lastest available version.
            </p>
            <ul class="a-browsers">
              <li v-for="browser in BROWSERS" class="a-browser">
                <a class="a-browser-link" :href="browser.link" target="_blank" rel="noopener">
                  <span class="a-browser-icon">
                    <img :src="`/images/browser-support-${browser.icon}.svg`">
                  </span>
                  <span class="a-browser-name">
                    {{ browser.name1 }} <br>
                    {{ browser.name2 }}
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" src="./aBrowserSupport.scss"></style>

<script>
import { BROWSERS } from './browsers.const'

export default {
  data () {
    return {
      BROWSERS
    }
  }
}
</script>
