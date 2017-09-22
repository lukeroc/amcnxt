<template>
  <div class="content a-ac-section">
    <div class="split-content contained-content">
      <div class="text-content">
        <h2 :class="{'fadeInUp': isAnimating}" class="split-content-title animated">Amico Connect</h2>
        <hr :class="{'fadeInUp': isAnimating}" class="split-content-separator animated">
        <p :class="{'fadeInUp': isAnimating}" class="split-content-paragraph animated">
          Keep in touch with Amico and make some new friends!
        </p>
        <p :class="{'fadeInUp': isAnimating}" class="split-content-paragraph animated">
          Amico would love to introduce you to some awesome
          people and help make your life more interesting!
        </p>
      </div>
      <div class="image-content">
        <img :class="{'fadeInUpImage': isAnimating}" class="split-content-image animated" alt="Amico Connect illustration" src="~/static/images/landing-amico-connect.svg">
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
.a-ac-section {
  .split-content-title {
    animation-delay: 0ms;
  }

  .split-content-separator {
    animation-delay: 120ms;
  }

  .split-content-paragraph {
    animation-delay: 240ms;
  }

  .split-content-paragraph:last-child {
    animation-delay: 360ms;
  }

  .split-content-image {
    animation-delay: 480ms;
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

    .split-content-paragraph:last-child {
      animation-delay: 480ms;
    }
  }
}
</style>
