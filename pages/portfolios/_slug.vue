<template>
  <div>
    <product-hero
      :title="portfolio.title"
      :subtitle="portfolio.subtitle"
      :author="portfolio.author"
    >
      <product-hero-card
        :price="portfolio.price"
        :discountedPrice="portfolio.discountedPrice"
        :navigateTo="portfolio.productLink"
        :requirements="portfolio.requirements"
        :image="portfolio.image"
        :promoVideoLink="portfolio.promoVideoLink"
        :github="portfolio.github"
      />
    </product-hero>
    <div class="container">
      <div class="columns">
        <div class="column is-9">
          <div class="section">
            <div class="what-you-get">
              <div class="what-you-get-title">Which Tech Tools Did I Used</div>
              <ul class="what-you-get-items">
                <!-- TODO: Iterate course wsl -->
                <li v-for="wsl in portfolio.wsl" :key="wsl.value" class="what-you-get-item">
                  <span>{{wsl.value}}</span>
                </li>
              </ul>
            </div>
          </div>
          <div class="section course-description p-t-none">
            <div class="course-description-title">Course Info</div>
            <div class="course-description-details">
              <!-- TODO: use v-html for description -->
              <div v-html="portfolio.description"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductHero from "~/components/ProductHero";
import ProductHeroCard from "~/components/ProductHeroCard";
export default {
  head() {
    return {
      title: this.portfolio.title,
      meta: [
        { hid: 'description', name: 'description', content: this.portfolio.subtitle }
      ]
    }
  },
  components: {
    ProductHero,
    ProductHeroCard
  },
  computed: {
    portfolio() {
      return this.$store.state.portfolio.item;
    }
  },
  async fetch({ store, params }) {
    await store.dispatch("portfolio/fetchPortfolioBySlug", params.slug);
  }
};
</script>

<!-- Fetch course by Slug -->
<!-- 1. create action "fetchCourseBySlug" in store/course.js -->
<!-- 2. send GET request '/api/v1/products/s/:slug' -->
<!-- 3. expect to receive "course" in "then" and commit it to state -->
<!-- 4. get course in computed properties -->
<!-- 5. Complete TODO's -->
<!-- 6. Navigate to detail page from home page when clicking on "Learn More" -->

<style lang="scss">
.what-you-get {
  background-color: #f9f9f9;
  border: 1px solid #dedfe0;
  padding: 10px 15px;
  &-title {
    font-size: 26px;
    font-weight: bold;
    margin-bottom: 10px;
  }
  &-items {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  &-item {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    font-size: 17px;
    width: 45%;
  }
}
.course-description {
  &-title {
    font-size: 26px;
    font-weight: bold;
    margin-bottom: 10px;
  }
  &-details {
    font-size: 18px;
    ul {
      list-style: disc;
      margin-left: 20px;
    }
    ol {
      margin-left: 20px;
    }
    strong {
      font-size: 20px;
    }
    p {
      min-height: 30px;
    }
  }
}
.youtube {
  
  width: 80%;
  max-width: 650px;
  margin-left: 20px;

}
</style>