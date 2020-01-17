<template>
  <div class="card manage-card">
    <header class="card-header card-section">
      <p class="card-header-title">What I Learned</p>
    </header>
    <div class="card-content card-section">
      <form>
        <multi-line-text-input label="What tools did I use" />
        <multi-line-text-input label="What i learned from this project" />
      </form>
    </div>
  </div>
</template>

<script>
import MultiLineTextInput from '~/components/form/MultiLineTextInput'
export default {
  components: {
    MultiLineTextInput
  }
}
</script>