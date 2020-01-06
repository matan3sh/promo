<template>
  <div>
    <hero />
    <section class="section">
      <div class="container">
        <h1 class="title">Featured Courses</h1>
        <div class="columns">
          <!-- iterate columns with v-for and don't forget :key -->
          <div v-for="portfolio in portfolios" :key="portfolio._id" class="column is-one-quarter">
            <!-- pass a portfolio as a prop to portfolio-card -->
            <portfolio-card :portfolio="portfolio" />
          </div>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <h1 class="title">Featured Articles</h1>
        <div class="columns">
          <div class="column is-one-quarter">
            <blog-card />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import PortfolioCard from '~/components/shared/PortfolioCard'
import BlogCard from '~/components/shared/BlogCard'
import Hero from '~/components/shared/Hero'
import { mapState } from 'vuex'
export default {
  components: {
    PortfolioCard,
    BlogCard,
    Hero
  },
  computed: {
    ...mapState({
      portfolios: state => state.portfolio.items
    })
  },
  async fetch({store}) {
    await store.dispatch('portfolio/fetchPortfolios')
  }
}
</script>

<style scoped lang="scss">
  // Home page
  .links {
    padding-top: 15px;
  }
</style>