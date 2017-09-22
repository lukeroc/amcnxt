<template>
  <div v-if="isDialogVisible" :class="{'is-visible': isVisible}" @click="close" class="a-dialog-overlay">
    <div @click.stop class="a-dialog-content-container">

      <div class="a-dialog-content-wrapper">
        <div @click="close" class="a-dialog-close">
          <i class="icon icon-close"></i>
        </div>

        <div class="a-dialog-content a-dialog-header">
          <slot name="a-dialog-header"></slot>
        </div>

        <div class="a-dialog-content a-dialog-body">
          <slot name="a-dialog-body"></slot>
        </div>

        <div class="a-dialog-content a-dialog-footer">
          <slot name="a-dialog-footer"></slot>
        </div>
      </div>

    </div><!-- end .a-dialog-content-container -->
  </div><!-- end .a-dialog-overlay -->
</template>

<style lang="scss" src="./aDialog.scss"></style>

<script>
export default {
  props: ['clickOverlayClose'],
  data () {
    return {
      isVisible: false
    }
  },
  computed: {
    isDialogVisible () {
      return this.isVisible
    }
  },
  methods: {
    open () {
      this.isVisible = true
    },
    close () {
      this.isVisible = false
      this.$emit('close')
    },
    closeFromOverlay () {
      this.clickOverlayClose ? this.close() : ''
    }
  }
}
</script>
