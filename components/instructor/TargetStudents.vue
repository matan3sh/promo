<template>
  <div class="card manage-card">
    <header class="card-header card-section">
      <p class="card-header-title">Tools and Learnings</p>
    </header>
    <div class="card-content card-section">
      <form>
        <multi-line-text-input
          @addClicked="addLine('wsl')"
          @removeClicked="removeLine($event, 'wsl')"
          @valueUpdated="updateLine($event, 'wsl')"  
          :lines="portfolio.wsl"
          label="What tools did I use"
        />
        <multi-line-text-input
          @addClicked="addLine('requirements')"
          @removeClicked="removeLine($event, 'requirements')"
          @valueUpdated="updateLine($event, 'requirements')"  
          :lines="portfolio.requirements" 
          label="What i learned from this project"
        />
      </form>
    </div>
  </div>
</template>

<script>
import MultiLineTextInput from '~/components/form/MultiLineTextInput'
export default {
  components: {
    MultiLineTextInput
  },
  props: {
    portfolio: {
      type: Object,
      required: true
    }
  },
  methods: {
    addLine(field) {
      this.$store.commit('instructor/portfolio/addLine', field)
    },
    removeLine(index, field) {
      this.$store.commit('instructor/portfolio/removeLine', {field, index})
    },
    updateLine({value, index}, field) {
      this.$store.dispatch('instructor/portfolio/updateLine', {field, value, index})
    }
  }
}
</script>