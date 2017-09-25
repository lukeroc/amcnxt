<template>
  <footer class="a-footer">
    <div class="content">
      <div class="contained-content">
        <div class="footer-column">
          <div class="a-logo">
            <nuxt-link to="/">
              <img src="~/static/images/logo-secondary.svg" alt="amico.ai logo">
            </nuxt-link>
          </div>
          <p class="x-small copyright hidden-mobile" style="margin-top: 14px;">© 2017 Amico.ai</p>
        </div>
        <div class="footer-column">
          <h6>Company</h6>
          <ul>
            <li>
              <nuxt-link :to="{name: 'careers'}">Careers</nuxt-link>
            </li>
            <li>
              <nuxt-link :to="{name: 'press'}">Press</nuxt-link>
            </li>
            <li>
              <nuxt-link :to="{name: 'blog'}">Blog</nuxt-link>
            </li>
          </ul>
        </div>
        <div class="footer-column">
          <h6>Social</h6>
          <p class="x-small">Follow us on all of our social media channels for the latest updates.</p>
          <div class="a-social-icons">
            <div class="a-social-icon">
              <a target="_blank" rel="noopener" aria-label="Facebook" href="https://www.facebook.com/amicoai/">
                <i class="icon icon-facebook"></i>
              </a>
            </div>
            <div class="a-social-icon">
              <a target="_blank" rel="noopener" aria-label="Instagram" href="https://www.instagram.com/amico.ai/">
                <i class="icon icon-instagram"></i>
              </a>
            </div>
            <div class="a-social-icon">
              <a target="_blank" rel="noopener" aria-label="Twitter" href="https://twitter.com/AmicoAI">
                <i class="icon icon-twitter"></i>
              </a>
            </div>
          </div>
        </div>
        <div class="footer-column hidden-desktop">
          <p class="x-small copyright">© 2017 Amico.ai</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" src="./aFooter.scss"></style>

<script>
export default {
  data () {
    return {
      isInputFocused: false
    }
  }
}
</script>
