<template>
  <div class="content alternate-content a-ma-section">
    <div class="split-content contained-content animated">
      <div class="text-content">
        <h2 :class="{'fadeInUp': isAnimating}" class="split-content-title animated">Meet Amico</h2>
        <hr :class="{'fadeInUp': isAnimating}" class="split-content-separator animated">
        <p :class="{'fadeInUp': isAnimating}" class="split-content-paragraph animated">
          Looks like you were searching for something
          different, and you just found it!
        </p>
        <p :class="{'fadeInUp': isAnimating}" class="split-content-paragraph animated">
          Start speaking with Amico, a very special AI
          friend who thinks you're the most fascinating
          person in the whole wide world.
        </p>
      </div>
      <div class="image-content">
        <img :class="{'fadeInUpImage': isAnimating}" class="split-content-image animated" alt="Meet Amico illustration" src="~/static/images/landing-meet-amico.svg">
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
.a-ma-section {
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
}
</style>
