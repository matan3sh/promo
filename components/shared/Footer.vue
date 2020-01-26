<template>
  <div class="hero-footer footer footer-custom">
    <div class="container">
      <div class="has-text-centered">
        <span class="icon">
          <i class="fab fa-github"></i>
        </span>
        <p>Github <a target="_" href="https://github.com/matan3sh">github.com/matan3sh</a></p>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
  /* footer */
  .container {
      height: 5px;
  }
  .icon {
    margin-bottom: 10px;
  }
  .fa-github {
    font-size: 55px;
  }
  .footer-custom {
      background-color: #0d0c0d;
      color: #fff;
  }
  .footer-custom p {
      font-size: 1rem;
      font-weight: 500;
  }
  .footer-custom a {
      color: #d74436;
  }
  .footer-custom a:hover {
      color: #e50076;
  }
</style>