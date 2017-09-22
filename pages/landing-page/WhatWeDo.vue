<template>
  <div class="content a-wwd-section">
    <div class="split-content contained-content animated">
      <div class="text-content">
        <h2 :class="{'fadeInUp': isAnimating}" class="split-content-title animated">What we do</h2>
        <hr :class="{'fadeInUp': isAnimating}" class="split-content-separator animated">
        <p :class="{'fadeInUp': isAnimating}" class="split-content-paragraph animated">
          We are a diverse group of fun-loving, friendly
          geeks working on developing an adaptive AI that
          is aware and responsive to human emotions.
        </p>
      </div>
      <div class="image-content">
        <img :class="{'fadeInUpImage': isAnimating}" class="split-content-image animated" alt="What We Do illustration" src="~/static/images/landing-what-we-do.svg">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['isAnimating']
}
</script>

<style lang="scss">
.a-wwd-section {
  .split-content-title {
    animation-delay: 0ms;
  }

  .split-content-separator {
    animation-delay: 120ms;
  }

  .split-content-paragraph {
    animation-delay: 240ms;
  }

  .split-content-image {
    animation-delay: 360ms;
  }

  @media (min-width: 920px) {
    .split-content-image {
      animation-delay: 0ms;
    }

    .split-content-title {
      animation-delay: 120ms;
    }

    .split-content-separator {
      animation-delay: 240ms;
    }

    .split-content-paragraph {
      animation-delay: 360ms;
    }
  }
}
</style>
