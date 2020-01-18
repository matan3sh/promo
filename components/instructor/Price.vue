<template>
  <div class="card manage-card">
    <header class="card-header card-section">
      <p class="card-header-title">Pricing</p>
    </header>
    <div class="card-content card-section">
      <div class="field">
        <label class="label">Price of the course</label>
        <div class="control">
          <input
            :value="portfolio.price"
            @input="($event) => emitPortfolioValue($event, 'price')" 
            class="input is-medium" 
            type="text" 
            placeholder="179.99" />
        </div>
      </div>
      <div class="field">
        <label class="label">Discounted Price for the course</label>
        <div class="control">
          <input
            :value="portfolio.discountedPrice"
            @input="($event) => emitPortfolioValue($event, 'discountedPrice')"  
            class="input is-medium" 
            type="text" 
            placeholder="9.99" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    portfolio: {
      type: Object,
      required: true
    }
  },
  methods: {
    emitPortfolioValue(e, field) {
      this.$emit('portfolioValueUpdated', {value: e.target.value, field})
    }
  }
}
</script>