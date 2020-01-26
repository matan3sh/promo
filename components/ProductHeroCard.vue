
<template>
  <div class="card">
    <div class="card-image">
      <figure class="image is-4by2">
        <img :src="image" alt="Placeholder image" />
      </figure>
    </div>
    <div class="card-content">
      <!-- <div class="content m-b-sm">
        <div class="media-content">
          <span class="title is-2 main-price">${{price}}</span>
          <span class="title is-2">${{discountedPrice}}</span>
        </div>
      </div>-->
      <a
        :href="navigateTo"
        target="_"
        class="button is-fullwidth is-large is-danger m-b-sm"
      >Demo</a>

      <a
        :href="github"
        target="_"
        class="button is-fullwidth is-large is-primary m-b-sm"
      >Source Code</a>

      <div class="content">
        <!-- <div class="m-b-none course-features">Use of Technologies</div> -->
        <div class="has-text-centered">
            <p>
            NEW TECH TOOLS I LEARNED
          </p>
        </div>
        <ul class="m-t-none">
          <li v-for="req in requirements" :key="req.value">{{req.value}}</li>
        </ul>
        <div class="m-b-none course-features">Promo Video</div>
        <youtube :video-id="promoVideoLink" ref="youtube" @playing="playing"></youtube>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    requirements: {
      type: Array,
      default: null
    },
    price: {
      type: Number,
      default: null
    },
    navigateTo: {
      type: String,
      default: ""
    },
    discountedPrice: {
      type: Number,
      required: true
    },
    image: {
      type: String,
      required: false
    },
    promoVideoLink: {
      type: String,
      required: false
    },
    github: {
      type: String,
      required: false
    }
  },
  methods: {
    playVideo() {
      this.player.playVideo();
    },
    playing() {
      console.log("o/ we are watching!!!");
    }
  },
  computed: {
    player() {
      return this.$refs.youtube.player;
    }
  }
};
</script>
<style scoped lang="scss">
.card {
  z-index: 9999;
  min-width: 330px;
  padding: 5px;
  border-radius: 5px;
  box-shadow: 0 0 1px 1px rgba(20, 23, 28, 0.1),
    0 3px 1px 0 rgba(20, 23, 28, 0.1);
  .title {
    color: gray;
  }
  .subtitle {
    color: gray;
  }
  .course-features {
    font-size: 17px;
  }
  .main-price {
    font-size: 17px;
    color: #7d7d7d;
    text-decoration: line-through;
  }
  .has-text-centered {
    font-weight: bolder;
  }
  .course-features {
    font-weight: bolder;
  }
}
</style>