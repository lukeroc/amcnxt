<template>
  <div class="a-tabs">
    <div :class="tabsListLayout" class="a-tabs-list">
      <slot name="left-tab-list"></slot>

      <a-tabs-list>
        <li v-for="(tab, index) in tabPanels"
          :key="index"
          role="tab"
          :class="{ 'is-active': isSelected(index), 'a-button-disabled': tab.disabled }"
          :selected="isSelected(index)"
          :disabled="tab.disabled"
          @click="select(index)"
          class="a-tab">
          <a class="is-unselectable">
            <img v-if="tab.icon" :src="`../../../../static/images/icons/tab-${tab.icon}.png`">
            <span v-if="tab.label">
              {{ tab.label }}
            </span>
          </a>
        </li>
      </a-tabs-list>

      <slot name="right-tab-list"></slot>
    </div><!-- end .a-tabs-list -->
    <div class="a-tabs-content">
      <slot></slot>
    </div>
  </div>
</template>

<style lang="scss" src="./aTabs.scss"></style>

<script>
import aTabsList from './aTabsList'

export default {
  components: { aTabsList },
  props: {
    tabsListLayout: String,
    selectedIndex: {
      type: Number,
      default: -1
    }
  },
  data () {
    return {
      realSelectedIndex: this.selectedIndex,
      tabPanels: []
    }
  },
  mounted () {
    this.update()
    if (this.realSelectedIndex === -1) {
      this.select(0)
    }
  },
  methods: {
    update () {
      for (const tabPanel of this.tabPanels) {
        if (!tabPanel.disabled && tabPanel.realSelected) {
          this.select(tabPanel.index)
          break
        }
      }
    },
    isSelected (index) {
      return index === this.realSelectedIndex
    },
    select (index) {
      this.$emit('tab-selected', index)
      this.realSelectedIndex = index
    }
  },
  watch: {
    selectedIndex (newIndex) {
      this.select(newIndex)
    }
  }
}
</script>
