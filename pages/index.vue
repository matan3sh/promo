<template>
  <div>
    <hero 
      :title="portfolioHero.title"
      :subtitle="portfolioHero.subtitle"
      :image="portfolioHero.image"
      :promoLink="portfolioHero.product && portfolioHero.product.productLink"
    />
    <section class="section">
      <div class="container">
        <h1 class="title">Featured Projects</h1>
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
    <section class="section">
      <div class="container">
        <h1 class="title">Featured Articles</h1>
        <div class="columns is-multiline">
          <div v-for="blog in featuredBlogs" :key="blog._id" class="column is-one-quarter">
            <blog-card
              :blog="blog" 
            />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import PortfolioCard from '~/components/shared/PortfolioCard'
import PortfolioCardTooltip from '~/components/PortfolioCardTooltip'
import BlogCard from '~/components/BlogCard'
import Hero from '~/components/shared/Hero'
import { mapState } from 'vuex'
export default {
  head: {
        title: 'Matan Shaviro | Portfolio'
  },
  components: {
    PortfolioCard,
    BlogCard,
    Hero,
    PortfolioCardTooltip
  },
  computed: {
    ...mapState({
      portfolios: state => state.portfolio.items,
      featuredBlogs: state => state.blog.items.featured,
      portfolioHero: state => state.hero.item
    })
  },
  async fetch({store}) {
    await store.dispatch('portfolio/fetchPortfolios')
    await store.dispatch('blog/fetchFeaturedBlogs', {'filter[featured]': true})
  }
}
</script>

<style scoped lang="scss">
  // Home page
  .links {
    padding-top: 15px;
  }
</style>