<template>
  <div class="card manage-card">
    <header class="card-header card-section">
      <p class="card-header-title">Project Landing Page</p>
    </header>
    <div class="card-content card-section">
      <form>
        <div class="field">
          <label class="label">Project title</label>
          <div class="control">
            <input
              :value="portfolio.title"
              @input="($event) => emitPortfolioValue($event, 'title')"
              class="input is-medium"
              type="text"
              placeholder="Dart and Flutter From Zero to Hero "
            />
          </div>
        </div>
        <div class="field">
          <label class="label">Project subtitle</label>
          <div class="control">
            <input
              :value="portfolio.subtitle"
              @input="($event) => emitPortfolioValue($event, 'subtitle')"
              class="input is-medium"
              type="text"
              placeholder="Build real mobile Application for Android and iOS."
            />
          </div>
        </div>
        <div class="field">
          <label class="label">Project description</label>
          <div class="control">
            <!-- <textarea
              :value="portfolio.description"
              @input="($event) => emitPortfolioValue($event, 'description')"
              class="textarea is-medium"
              type="text"
              placeholder="Write something catchy about the course"
            ></textarea> -->
            <portfolio-editor
              :initialContent="portfolio.description"
              @editorUpdated="(content) => emitPortfolioValue(content, 'description')"
            />
          </div>
        </div>
        <div class="field">
          <label class="label">Category</label>
          <div class="select is-medium">
            <select 
              :value="portfolio.category._id"
              @change="($event) => emitPortfolioValue($event, 'category')"
            >
              <option 
                v-for="category in categories"
                :key="category._id"
                :value="category._id">
                {{category.name}}
              </option>
            </select>
          </div>
        </div>
        <div class="field">
          <label class="label">Project Image</label>
          <div class="columns">
            <div class="column">
              <figure class="image is-4by2">
                <img :src="portfolio.image" />
              </figure>
            </div>
            <div class="column centered">
              <div class="control">
                <input
                  :value="portfolio.image"
                  @input="($event) => emitPortfolioValue($event, 'image')"
                  class="input is-medium"
                  type="text"
                  placeholder="https://images.unsplash.com/photo-1498837167922-ddd27525d352"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="field">
          <label class="label">Project Link</label>
          <div class="control">
            <input
              :value="portfolio.productLink"
              @input="($event) => emitPortfolioValue($event, 'productLink')"
              class="input is-medium"
              type="text"
              placeholder="https://www.udemy.com/vue-js-2-the-full-guide-by-real-apps-vuex-router-node"
            />
          </div>
        </div>
        <div class="field">
          <label class="label">Project Video Link</label>
          <div class="control">
            <input
              :value="portfolio.promoVideoLink"
              @input="($event) => emitPortfolioValue($event, 'promoVideoLink')"
              class="input is-medium"
              type="text"
              placeholder="https://www.youtube.com/watch?v=WQ9sCAhRh1M"
            />
          </div>
        </div>
        <div class="field">
          <label class="label">Project Github Link</label>
          <div class="control">
            <input
              :value="portfolio.github"
              @input="($event) => emitPortfolioValue($event, 'github')"
              class="input is-medium"
              type="text"
              placeholder="https://github.com/matan3sh/promo"
            />
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import PortfolioEditor from '~/components/editor/PortfolioEditor'
export default {
  components: {
    PortfolioEditor
  },
  props: {
    portfolio: {
      type: Object,
      required: true
    }
  },
  computed: {
    categories() {
      return this.$store.state.category.items
    }
  },
  methods: {
    emitPortfolioValue(e, field) {
      const value = e.target ? e.target.value : e

      if (field === 'category') {
        return this.emitCategory(value)
      }

      return this.$emit('portfolioValueUpdated', {value, field})
    },
    emitCategory(categoryId) {
      const foundCategory = this.categories.find(c => c._id === categoryId)
      this.$emit('portfolioValueUpdated', {value: foundCategory, field: 'category'})
    }
  }
}
</script>