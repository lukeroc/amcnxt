<template>
  <div class="VueToNuxtLogo">
    <img src="../static/images/amico.png" alt="Amico">
  </div>
</template>

<style>
.VueToNuxtLogo {
  display: inline-block;
  animation: turn 1s linear forwards 500ms;
  transform: rotateY(180deg);
  position: relative;
  overflow: hidden;
  width: 245px;
}

@keyframes turn {
  100% {
    transform: rotateY(0deg);
  }
}
</style>
