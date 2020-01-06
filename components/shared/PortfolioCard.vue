<template>
  <div class="card">
    <div class="card-image">
      <figure class="image is-4by2">
        <img
          :src="portfolio.image"
        />
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-content">
          <p class="title is-4">{{portfolio.title | shortenText(45)}}</p>
          <p class="subtitle is-6">
            <i>by {{portfolio.author.name}}</i>
          </p>
        </div>
      </div>
      <div class="content">
        {{portfolio.subtitle | shortenText(45)}}
        <br />
      </div>
      <div class="price-box">
        <span class="price">{{portfolio.price}}$</span>
        <span class="disc-price">{{portfolio.discountedPrice}}$</span>
      </div>
    </div>
    <footer class="card-footer">
      <nuxt-link :to="''" class="card-footer-item">Learn More</nuxt-link>
      <a target="_" :href="portfolio.productLink" class="card-footer-item">Enroll</a>
    </footer>
  </div>
</template>

<script>
export default {
  props: {
    portfolio: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped lang="scss">
.card-image:hover {
  cursor: pointer;
  opacity: 0.9;
}
.price-box {
  text-align: right;
  .price {
    color: gray;
    font-size: 16px;
    text-decoration: line-through;
  }
  .disc-price {
    font-size: 21px;
    font-weight: bold;
  }
}
</style>