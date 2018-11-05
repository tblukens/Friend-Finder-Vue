<template>
  <div>

    <div class="box cta has-text-centered has-text-primary has-background-white-ter is-size-5">
      <h1>Please answer questions below</h1>
    </div>
    <section class="container">
          <div class="card is-shady">
            <div class="card-content">
              <div class="content">
                  <Form />
              </div>
            </div>
          </div>

    </section>

  </div>
</template>


<script>
import Form from "@/components/Form";

export default {
  name: "Survey",
  data: () => {
    return {};
  },
  components: {
    Form
  }
};
</script>

<style>
.survey {
  max-width: 800px;
  margin-top: 60px;
}
.survey-header {
  margin: 0 auto;
}
.survey .card {
  padding: 50px;
}
.survey i {
  margin: 0 auto;
}
</style>
