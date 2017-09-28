<template>
  <div v-if="realSelected" :class="classObject" role="tabpanel">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    selected: Boolean,
    disabled: Boolean,
    icon: {
      type: String,
      required: false
    },
    label: {
      type: String,
      required: false
    }
  },
  data () {
    return {
      realSelected: this.selected
    }
  },
  created () {
    this.$parent.tabPanels.push(this)
  },
  beforeDestroy () {
    this.$parent.tabPanels.splice(this.index, 1)
  },
  computed: {
    classObject () {
      const { realSelected } = this
      return {
        'tab-panel': true,
        'is-active': realSelected,
        'is-deactive': !realSelected
      }
    },
    hidden () {
      return this.realSelected ? 'false' : 'true'
    },
    index () {
      return this.$parent.tabPanels.indexOf(this)
    }
  },
  watch: {
    '$parent.realSelectedIndex' (index, prevIndex) {
      this.realSelected = this.index === index
    }
  }
}
</script>
