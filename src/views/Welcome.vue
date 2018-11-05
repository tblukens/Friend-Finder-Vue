<template>
  <div class="box cta has-text-centered has-background-white-ter">
    <router-link tag="Survey" to="/survey">
      <a class="button is-outlined">
        <span class="icon">
          <font-awesome-icon icon="edit" />
        </span>
        <span>Take the Survey</span>
      </a>
    </router-link>
  </div>

</template>

<script>
export default {
  name: "Welcome",
  data: () => {
    return {};
  },
  methods: {}
};
</script>

<style>
.welcome {
  max-width: 560px;
  margin-top: 60px;
}
.welcome .card {
  padding: 50px;
}
.welcome h2 {
  font-size: 3em;
  margin: auto;
}
.welcome button {
  margin: 30px auto;
}
</style>
