<template>
  <div>
    <section class="section">
      <div class="container">
        <h1 class="title">Explore All of My Projects</h1>
        <div class="columns is-multiline">
          <!-- iterate columns with v-for and don't forget :key -->
          <div v-for="portfolio in portfolios" :key="portfolio._id" class="column is-one-quarter">
            <!-- pass a portfolio as a prop to portfolio-card -->
            <v-popover
              offset="16"
              trigger="hover"
              placement="right-start"
            >
              <portfolio-card :portfolio="portfolio" />
              <template slot="popover">
                <portfolio-card-tooltip 
                  :title="portfolio.title"
                  :subtitle="portfolio.category.name"
                  :description="portfolio.subtitle"
                  :wsl="portfolio.wsl"
                />
              </template>
            </v-popover>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import PortfolioCard from '~/components/shared/PortfolioCard'
import PortfolioCardTooltip from '~/components/PortfolioCardTooltip'
import { mapState } from 'vuex'
export default {
  head: {
    title: "Tech Projects | Matan Shaviro"
  },
  components: {
    PortfolioCard,
    PortfolioCardTooltip
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